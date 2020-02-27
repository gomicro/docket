import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
}))

export const Title = () => {
  const classes = useStyles()

  return (
    <Link to='/' className={classes.link}>
      <Typography variant='h6' className={classes.title}>
        Docket
      </Typography>
    </Link>
  )
}
