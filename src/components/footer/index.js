/* global GIT_COMMIT_HASH */

import React from 'react'

import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    padding: theme.spacing(3, 0),
    marginTop: 'auto',
  },
}))

const Copyright = () => (
  <Typography variant='body2' color='textSecondary' align='center'>
    {'Copyright © Gomicro '}
    {new Date().getFullYear()}
  </Typography>
)

const Version = () => (
  <Typography variant='body2' color='textSecondary' align='center'>
    {GIT_COMMIT_HASH.substring(0, 8)}
  </Typography>
)

const Tagline = () => (
  <Typography
    variant='subtitle1'
    align='center'
    color='textSecondary'
    component='p'
  >
    See what's next on the docket.
  </Typography>
)

export const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        <Tagline />
        <Version />
        <Copyright />
      </Container>
    </footer>
  )
}
