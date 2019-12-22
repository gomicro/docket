import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

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
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <form className={classes.authForm} noValidate autoComplete='off'>
          <TextField required id='standard-required' label='Auth Token' />
        </form>
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
