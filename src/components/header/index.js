import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {},
  fingerprint: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
  },
  loginButton: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          Docket
        </Typography>
        <Typography component='span' className={classes.fingerprint}>
          ({GIT_HASH})
        </Typography>
        <Link to={'/login'} className={classes.loginButton}>
          <Button color='inherit'>Login</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
