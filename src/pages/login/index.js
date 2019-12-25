import React from 'react'
import { useHistory } from 'react-router-dom'

import { Auth } from '../../clients/github'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 350,
    margin: '4em auto',
  },
  authForm: {
    display: 'flex',
    '& .MuiTextField-root': {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  },
  loginButton: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
}))

export const Login = () => {
  const history = useHistory()
  const classes = useStyles()

  const handleAuth = () => {
    const token = document.getElementById('auth-token').value
    Auth.setToken(token)

    history.push('/')
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <form className={classes.authForm} noValidate autoComplete='off'>
          <TextField required id='auth-token' label='Auth Token' />
        </form>
      </CardContent>
      <CardActions>
        <Button
          className={classes.loginButton}
          variant='contained'
          color='primary'
          onClick={handleAuth}
        >
          Login
        </Button>
      </CardActions>
    </Card>
  )
}
