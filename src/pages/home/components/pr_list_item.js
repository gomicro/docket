import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment'

import { Context } from 'context'
import { PullRequests } from '../../../clients/github'

import {
  Avatar,
  Badge,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Check, LibraryBooks, MergeType, ThumbUp } from '@material-ui/icons'
import { green, orange, grey } from '@material-ui/core/colors'

const MergeFeatureFlag = false
const ChecksFeatureFlag = false

const chipVal = date => {
  const from = moment(`${date}`)
  const now = moment(moment.now())
  const diff = now.diff(from, 'seconds')

  if (now.diff(from, 'seconds') < 60) {
    return `${diff}s`
  } else if (now.diff(from, 'seconds') < 3600) {
    return `${now.diff(from, 'minutes')}m`
  } else if (now.diff(from, 'seconds') < 86400) {
    return `${now.diff(from, 'hours')}h`
  } else if (now.diff(from, 'seconds') < 604800) {
    return `${now.diff(from, 'day')}d`
  } else if (now.diff(from, 'seconds') < 2419200) {
    return `${now.diff(from, 'week')}w`
  } else if (now.diff(from, 'seconds') < 13222801) {
    return `${now.diff(from, 'month')}M`
  } else {
    return `${now.diff(from, 'year')}y`
  }
}

const useStyles = makeStyles({
  approved: {
    fontSize: '1.1em',
    verticalAlign: 'sub',
    marginLeft: '16px',
    color: props =>
      props.approved === 'approved'
        ? green[500]
        : props.approved === 'needsChanges'
        ? orange[500]
        : grey[400],
  },
  checks: {
    fontSize: '1.1em',
    verticalAlign: 'sub',
    marginLeft: '8px',
    color: grey[400],
  },
  mergable: {
    backgroundColor: grey[400],
  },
})

const Title = ({ title, approved }) => {
  const classes = useStyles({ approved })

  return (
    <>
      {title}
      <Tooltip title={`Approval: ${approved}`}>
        <ThumbUp className={classes.approved} />
      </Tooltip>
      {ChecksFeatureFlag && (
        <Tooltip title='Github Checks'>
          <Check className={classes.checks} />
        </Tooltip>
      )}
    </>
  )
}

export const PRListItem = ({ pr }) => {
  const [approved, setApproved] = useState('unapproved')

  const classes = useStyles()

  const { addAlert } = useContext(Context)

  useEffect(() => {
    if (pr) {
      PullRequests.getReviewStatus(pr)
        .then(statuses => statuses.map(status => status.state))
        .then(statuses => {
          if (statuses.includes('CHANGES_REQUESTED')) {
            setApproved('needsChanges')
          } else if (statuses.includes('APPROVED')) {
            setApproved('approved')
          }
        })
        .catch(error => addAlert(error.toString()))
    }
  }, [pr])

  return (
    <ListItem dense button component='a' href={pr.link} target='_blank'>
      <ListItemAvatar>
        <Badge
          color='secondary'
          overlap='circle'
          badgeContent={chipVal(pr.createdAt)}
        >
          <Avatar className={classes.mergable}>
            <LibraryBooks />
          </Avatar>
        </Badge>
      </ListItemAvatar>
      <ListItemText
        primary={<Title title={pr.title} approved={approved} />}
        secondary={`${pr.org}/${pr.repo}`}
      />
      {MergeFeatureFlag && (
        <ListItemSecondaryAction>
          <IconButton edge='end' aria-label='delete'>
            <MergeType />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  )
}
