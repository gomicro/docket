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

export const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        <Typography variant='body2' color='textSecondary' align='center'>
          {'Copyright © Gomicro '}
          {new Date().getFullYear()} &mdash; {GIT_COMMIT_HASH.substring(0, 8)}
        </Typography>
      </Container>
    </footer>
  )
}
