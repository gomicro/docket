import React, { useContext, useState } from 'react'
import { Context } from 'context'

import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, Menu, MenuItem } from '@material-ui/core'
import { Autorenew } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  autoRefreshButton: {
    marginRight: theme.spacing(1),
  },
}))

const autoRefreshOptions = ['Auto Refresh', 'Off', 5, 10, 15, 30]

export const AutoRefreshMenu = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(2)

  const { setAutoRefresh } = useContext(Context)

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    setAutoRefresh(autoRefreshOptions[index] * 60 * 1000)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <List component='nav' aria-label='Auto Refresh'>
        <ListItem
          button
          aria-haspopup='true'
          aria-controls='auto-refresh-menu'
          aria-label='auto refresh frequency'
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
      <Menu
        id='auto-refresh-menu'
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
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}
            {index > 1 && ' Minutes'}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
