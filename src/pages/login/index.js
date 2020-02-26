import React from 'react'
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

import { Auth } from '../../clients/github'

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
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <GitHub />
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
