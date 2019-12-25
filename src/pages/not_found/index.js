import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    maxWidth: 450,
    margin: '6em auto',

    '& .MuiCardHeader-content': {
      textAlign: 'center',
    },
  },
  cardContent: {
    textAlign: 'center',
  },
})

export const NotFound = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader title='404 Not Found' />
      <CardContent>
        <Typography
          className={classes.cardContent}
          variant='body2'
          color='textSecondary'
          component='p'
        >
          By now we've guessed that you don't know where you are. The catch is
          that we don't know where you are either. Enjoy your time in knowere
          and we'll see you at <Link to={'/'}>Home</Link>.
        </Typography>
      </CardContent>
    </Card>
  )
}
