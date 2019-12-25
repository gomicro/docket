import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Auth } from '../../clients/github'
import { Consumer } from '../../context'

import { makeStyles } from '@material-ui/core/styles'

import {
  AppBar,
  Button,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'

import { Autorenew } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  loginButton: {
    color: 'inherit',
    textDecoration: 'none',
  },
  autoRefreshButton: {
    marginRight: theme.spacing(1),
  },
}))

const autoRefreshOptions = ['Auto Refresh', 'Off', 5, 10, 15, 30]

export const Header = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(2)

  const ActionButton = () => {
    const action = Auth.authed() ? 'logout' : 'login'

    return (
      <Link to={`/${action}`} className={classes.loginButton}>
        <Button color='inherit'>{action}</Button>
      </Link>
    )
  }

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event, index, setAutoRefresh) => {
    setSelectedIndex(index)
    setAutoRefresh(autoRefreshOptions[index] * 60 * 1000)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Docket
        </Typography>
        <List component='nav' aria-label='Device settings'>
          <ListItem
            button
            aria-haspopup='true'
            aria-controls='lock-menu'
            aria-label='when device is locked'
            onClick={handleClickListItem}
          >
            <Autorenew className={classes.autoRefreshButton} />
            <ListItemText
              primaryTypographyProps={{ variant: 'button' }}
              primary={`${autoRefreshOptions[selectedIndex]} ${
                selectedIndex > 1 ? 'Minutes' : ''
              }`}
            />
          </ListItem>
        </List>
        <Consumer>
          {({ setAutoRefresh }) => (
            <Menu
              id='lock-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {autoRefreshOptions.map((option, index) => (
                <MenuItem
                  key={option}
                  disabled={index === 0}
                  selected={index === selectedIndex}
                  onClick={event =>
                    handleMenuItemClick(event, index, setAutoRefresh)
                  }
                >
                  {option}
                  {index > 1 && ' Minutes'}
                </MenuItem>
              ))}
            </Menu>
          )}
        </Consumer>
        <ActionButton />
      </Toolbar>
    </AppBar>
  )
}

/*
<ArrowDropDown />
<Button>
  {selectedIndex !== 0 && <Autorenew />}
  {`${autoRefreshOptions[selectedIndex]} ${selectedIndex !== 0 &&
    'minutes'}`}
</Button>
*/
