import React from 'react'

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

export const TravisLogin = ({ setAuthed }) => {
  const classes = useStyles()

  const handleAuth = () => {
    const token = document.getElementById('travis-auth-token').value
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <form className={classes.authForm} noValidate autoComplete='off'>
          <TextField
            required
            id='travis-auth-token'
            label='Travis Auth Token'
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
