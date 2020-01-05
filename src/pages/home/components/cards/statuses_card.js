import React, { useState } from 'react'

import { cardStyles } from './card_styles'
import { TravisLogin } from '../travis_login'

import { Refresh, MoreVert } from '@material-ui/icons'
import { TravisIcon } from '../../../../assets/icons/travis'
import { Card, CardContent, CardHeader, IconButton } from '@material-ui/core'

export const StatusesCard = () => {
  const [authed, setAuthed] = useState(false)
  const [lastUpdated, setLastUpdated] = useState('null')

  const classes = cardStyles()

  const updateContents = () => {}

  const CardActions = () => {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleOpen = event => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }

    const handleLogout = () => {}

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
        {authed ? <div>statuses</div> : <TravisLogin setAuthed={setAuthed} />}
      </CardContent>
    </Card>
  )
}
