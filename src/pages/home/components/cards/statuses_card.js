import React, { useContext, useEffect, useState } from 'react'
import { Context } from 'context'
import moment from 'moment'

import { Auth, Repos } from '../../../../clients/travis'
import { cardStyles } from './card_styles'
import { TravisLogin } from '../travis_login'
import { StatusesList } from '../statuses_list'

import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@material-ui/core'
import { ExitToApp, Refresh, MoreVert } from '@material-ui/icons'
import { TravisIcon } from '../../../../assets/icons/travis'

export const StatusesCard = () => {
  const [authed, setAuthed] = useState(false)
  const [statuses, setStatuses] = useState([])
  const [lastUpdated, setLastUpdated] = useState('null')

  const { addAlert } = useContext(Context)

  const classes = cardStyles()

  useEffect(() => {
    setAuthed(Auth.authed())
  }, [])

  useEffect(() => {
    authed && updateContents()
  }, [authed])

  const updateContents = () => {
    Repos.getRepos()
      .then(repos => {
        repos.map(repo => Repos.getBranches({ slug: repo.slug })),
          // setStatuses(repos)
          setLastUpdated(moment().format('LTS'))
      })
      .catch(error => addAlert(error.toString()))
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
        setStatuses([])
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
          id='status-menu'
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
        avatar={<TravisIcon />}
        className={classes.cardTitle}
        title={'Statuses'}
        titleTypographyProps={{ variant: 'body1' }}
        subheader={authed && lastUpdated ? `Last Updated: ${lastUpdated}` : ''}
        subheaderTypographyProps={{ variant: 'body2' }}
        action={<CardActions />}
      />
      <CardContent className={classes.cardContent}>
        {authed ? (
          <StatusesList statuses={[]} />
        ) : (
          <TravisLogin setAuthed={setAuthed} />
        )}
      </CardContent>
    </Card>
  )
}
