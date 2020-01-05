import React, { useContext, useEffect, useState } from 'react'
import { Context } from 'context'
import moment from 'moment'

import { Auth, Orgs, PullRequests } from '../../../../clients/github'
import { cardStyles } from './card_styles'
import { GithubLogin } from '../github_login'
import { PRList } from '../pr_list'

import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@material-ui/core'
import { ExitToApp, GitHub, MoreVert, Refresh } from '@material-ui/icons'

export const PRCard = () => {
  const [authed, setAuthed] = useState(false)
  const [prs, setPRs] = useState([])
  const [lastUpdated, setLastUpdated] = useState(null)
  const [loop, setLoop] = useState()

  const { addAlert, autoRefresh } = useContext(Context)

  const classes = cardStyles()

  useEffect(() => {
    setAuthed(Auth.authed())
  }, [])

  useEffect(() => {
    authed && updateContents()
  }, [authed])

  useEffect(() => {
    clearInterval(loop)
    if (!isNaN(autoRefresh) && authed) {
      Orgs.getOrgs()
        .then(orgs => {
          const names = orgs.map(o => o.login)
          setLoop(
            setInterval(() => updatePRs({ orgNames: names }), autoRefresh),
          )
        })
        .catch(error => addAlert(error.toString()))
    }
  }, [autoRefresh])

  const updateContents = () => {
    Orgs.getOrgs()
      .then(orgs => {
        const names = orgs.map(o => o.login)
        updatePRs({ orgNames: names })
      })
      .catch(error => addAlert(error.toString()))
  }

  const updatePRs = ({ orgNames }) => {
    PullRequests.getPullRequests({ orgNames }).then(newPRs => {
      setPRs(newPRs)
      setLastUpdated(moment().format('LTS'))
    })
  }

  const CardActions = () => {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleOpen = event => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }

    const handleLogout = () => {
      if (!Auth.clearToken()) {
        setPRs([])
        setAuthed(false)
      }
    }

    return authed ? (
      <>
        <IconButton aria-label='refresh' onClick={updateContents}>
          <Refresh />
        </IconButton>
        <IconButton aria-label='settings' onClick={handleOpen}>
          <MoreVert />
        </IconButton>
        <Menu
          id='github-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={updateContents}>
            <ListItemIcon>
              <Refresh />
            </ListItemIcon>
            Refresh
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </>
    ) : null
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Badge color='primary' max={999} badgeContent={prs.length}>
            <GitHub />
          </Badge>
        }
        className={classes.cardTitle}
        title={'Pull Requests'}
        titleTypographyProps={{ variant: 'body1' }}
        subheader={authed && lastUpdated ? `Last Updated: ${lastUpdated}` : ''}
        subheaderTypographyProps={{ variant: 'body2' }}
        action={<CardActions />}
      />
      <CardContent className={classes.cardContent}>
        {authed ? <PRList prs={prs} /> : <GithubLogin setAuthed={setAuthed} />}
      </CardContent>
    </Card>
  )
}
