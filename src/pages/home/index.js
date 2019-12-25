import React from 'react'

import { Consumer } from '../../context'

import { PRCard } from './components/pr_card'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  gridContainer: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

export const Home = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.gridContainer} container spacing={3}>
      <Grid item md={12} xs={12}>
        <Consumer>
          {({ autoRefresh }) => {
            return <PRCard autoRefresh={autoRefresh} />
          }}
        </Consumer>
      </Grid>
    </Grid>
  )
}
