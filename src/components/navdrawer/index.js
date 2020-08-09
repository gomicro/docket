import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from 'context'

import {
  Drawer,
  List,
  ListItem,
  IconButton,
  Divider,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  // Info,
  // Settings,
  List as ListIcon,
  ChevronLeft,
} from '@material-ui/icons'

const nav = [
  {
    links: [
      { to: '/', primary: 'PR List', icon: ListIcon },
      /*
      {
        to: '/about',
        primary: 'About',
        icon: Info,
      },
      */
    ],
  },
  /*
  { divider: true },
  {
    links: [
      {
        to: '/settings',
        primary: 'Settings',
        icon: Settings,
      },
    ],
  },
  */
]

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
  close: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}))

const NavList = ({ links }) => {
  const { toggleNavDrawer } = useContext(Context)
  const classes = useStyles()

  return (
    <List className={classes.list}>
      {links.map((link, idx) => (
        <ListItem
          button
          component={Link}
          to={link.to}
          key={idx}
          onClick={toggleNavDrawer}
        >
          <ListItemIcon>
            <link.icon />
          </ListItemIcon>
          <ListItemText primary={link.primary} />
        </ListItem>
      ))}
    </List>
  )
}

const Nav = ({ nav }) => {
  return nav.map((n, idx) => {
    return (
      (n.links && <NavList links={n.links} />) ||
      (n.divider && <Divider />) || <></>
    )
  })
}

export const NavDrawer = () => {
  const { navDrawer, toggleNavDrawer } = useContext(Context)
  const classes = useStyles()

  return (
    <Drawer anchor='left' open={navDrawer} onClose={toggleNavDrawer}>
      <div className={classes.close}>
        <Typography variant='h6' className={classes.title}>
          Nav
        </Typography>
        <IconButton onClick={toggleNavDrawer}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <Nav nav={nav} />
    </Drawer>
  )
}
