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
} from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import { MergeType, LibraryBooks } from '@material-ui/icons'
import { green, orange, grey } from '@material-ui/core/colors'

const MergeFeatureFlag = false

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

export const PRListItem = ({ pr }) => {
  const [status, setStatus] = useState('unapproved')
  const { addAlert } = useContext(Context)

  useEffect(() => {
    if (pr) {
      PullRequests.getReviewStatus(pr)
        .then(statuses => statuses.map(status => status.state))
        .then(statuses => {
          if (statuses.includes('CHANGES_REQUESTED')) {
            setStatus('needsChanges')
          } else if (statuses.includes('APPROVED')) {
            setStatus('approved')
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
          <StyledAvatar status={status}>
            <LibraryBooks />
          </StyledAvatar>
        </Badge>
      </ListItemAvatar>
      <ListItemText primary={pr.title} secondary={`${pr.org}/${pr.repo}`} />
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

const approved = green[500]
const needsChanges = orange[200]
const unapproved = grey[400]

const StyledAvatar = styled(({ status, ...rest }) => <Avatar {...rest} />)({
  backgroundColor: props =>
    props.status === 'approved'
      ? approved
      : props.status === 'needsChanges'
      ? needsChanges
      : unapproved,
})
