import React from 'react'

import { Consumer } from '../../context'

import { PRCard } from './components/cards'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  gridContainer: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

export const Home = () => {
  const classes = useStyles()

  return (
    <Container>
      <Grid className={classes.gridContainer} container spacing={3}>
        <Grid item md={12}>
          <Consumer>
            {({ autoRefresh }) => {
              return <PRCard autoRefresh={autoRefresh} />
            }}
          </Consumer>
        </Grid>
      </Grid>
    </Container>
  )
}
