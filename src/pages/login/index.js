import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActions, CardContent, Button } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'

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
  const classes = useStyles()

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
        >
          Login
        </Button>
      </CardActions>
    </Card>
  )
}
