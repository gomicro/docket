import React, { useState } from 'react'

import { Auth } from '../../../clients/github'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from '@material-ui/core'

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
  loginButton: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
}))

export const GithubLogin = ({ setAuthed }) => {
  const [invalid, setInvalid] = useState({})
  const classes = useStyles()

  const handleAuth = () => {
    const token = document.getElementById('github-auth-token').value

    if (token.length < 40) {
      setInvalid({
        state: true,
        message: 'Token too short',
      })
    } else {
      setAuthed(Auth.setToken(token))
    }
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <form className={classes.authForm} noValidate autoComplete='off'>
          <TextField
            required
            error={invalid.state}
            helperText={invalid.message}
            id='github-auth-token'
            label='Github Auth Token'
          />
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
