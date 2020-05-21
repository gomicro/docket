import React from 'react'

import { PRCard } from './components/cards'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
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
          <PRCard />
        </Grid>
      </Grid>
    </Container>
  )
}
