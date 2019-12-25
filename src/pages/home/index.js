import React, { useEffect, useState } from 'react'

import moment from 'moment'

import { Orgs, PullRequests } from '../../client'
import { Consumer } from '../../context'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardHeader,
  CardContent,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core'

import RefreshIcon from '@material-ui/icons/Refresh'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles(theme => ({
  prCard: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),

    '& .MuiCardContent-root:last-child': {
      paddingBottom: 0,
    },
  },
  prCardTitle: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    borderBottom: `1px solid ${theme.palette.grey['300']}`,
  },
  prCardContent: {
    padding: 0,
    maxHeight: '33vh',
    overflow: 'scroll',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}))

const PRCard = ({ autoRefresh }) => {
  const [orgNames, setOrgNames] = useState([])
  const [prs, setPRs] = useState([])
  const [lastUpdated, setLastUpdated] = useState('null')
  const [loop, setLoop] = useState()

  const classes = useStyles()

  useEffect(() => {
    Orgs.getOrgs()
      .then(orgs => {
        const names = orgs.map(o => o.login)
        setOrgNames(names)
        updatePRs({ orgNames: names })
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    clearInterval(loop)
    if (!isNaN(autoRefresh)) {
      Orgs.getOrgs()
        .then(orgs => {
          const names = orgs.map(o => o.login)
          setOrgNames(names)
          setLoop(
            setInterval(() => updatePRs({ orgNames: names }), autoRefresh),
          )
        })
        .catch(error => console.log(error))
    }
  }, [autoRefresh])

  const updatePRs = ({ orgNames }) => {
    PullRequests.getPullRequests({ orgNames }).then(newPRs => {
      setPRs(newPRs)
      setLastUpdated(moment().format('LTS'))
    })
  }

  return (
    <Card className={classes.prCard}>
      <CardHeader
        className={classes.prCardTitle}
        title={`Pull Requests (${prs.length})`}
        titleTypographyProps={{ variant: 'body1' }}
        subheader={`Last Updated: ${lastUpdated}`}
        subheaderTypographyProps={{ variant: 'body2' }}
        action={
          <IconButton
            aria-label='refresh'
            onClick={() => {
              updatePRs({ orgNames })
            }}
          >
            <RefreshIcon />
          </IconButton>
        }
      />
      <CardContent className={classes.prCardContent}>
        <List dense disablePadding>
          {prs.map(pr => (
            <ListItem
              dense
              key={`${pr.org}:${pr.repo}:${pr.id}`}
              button
              component='a'
              href={pr.link}
              target='_blank'
            >
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText
                primary={pr.title}
                secondary={`${pr.org}/${pr.repo}`}
              />
              <ListItemSecondaryAction>
                <Chip label={moment(`${pr.createdAt}`).fromNow(true)} />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export const Home = () => {
  return (
    <Consumer>
      {({ autoRefresh }) => {
        return <PRCard autoRefresh={autoRefresh} />
      }}
    </Consumer>
  )
}
