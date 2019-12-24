import React from 'react'

import { Auth } from '../../client'

import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  loginButton: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))

export const Header = () => {
  const classes = useStyles()

  const ActionButton = () => {
    const action = Auth.authed() ? 'logout' : 'login'

    return (
      <Link to={`/${action}`} className={classes.loginButton}>
        <Button color='inherit'>{action}</Button>
      </Link>
    )
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Docket
        </Typography>
        <ActionButton />
      </Toolbar>
    </AppBar>
  )
}
