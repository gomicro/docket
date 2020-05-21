import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from '@material-ui/core'
import { GitHub } from '@material-ui/icons'

import { Context } from 'context'
import { Auth } from '../../clients/github'

const useStyles = makeStyles((theme) => ({
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
  loginContent: {
    textAlign: 'center',
  },
  loginIcon: {
    fontSize: '4em',
  },
  loginButton: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
}))

export const Login = () => {
  const history = useHistory()
  const classes = useStyles()

  const { app, addAlert, user } = useContext(Context)

  useEffect(() => {
    app
      .auth()
      .getRedirectResult()
      .then((result) => {
        console.log(result)
        if (result.credential) {
          var token = result.credential.accessToken
          console.log(token)
        }
      })
      .catch((error) => addAlert(error))
  }, [user])

  const handleAuth = () => {
    const provider = new app.firebase_.auth.GithubAuthProvider()
    provider.addScope('repo')
    app.auth().signInWithRedirect(provider)
  }

  return (
    <Card className={classes.card}>
      <CardContent className={classes.loginContent}>
        <GitHub className={classes.loginIcon} />
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
