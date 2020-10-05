import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

export const About = () => {
  const classes = useStyles()

  return (
    <Container>
      <Grid className={classes.gridContainer} container spacing={3}>
        <Grid item md={12}>
          <Typography variant='h4' gutterBottom>
            About
          </Typography>
          <Typography variant='h5' gutterBottom>
            How
          </Typography>
          <Typography variant='body1' gutterBottom>
            Docket came about in late 2019, through the needs of a day job with
            many repos, all hosting microservices, with changes scattered across
            them from several developers. Simply put, we needed a way to make
            sure that PRs were being merged.
          </Typography>
          <Typography variant='h5' gutterBottom>
            Merged Code
          </Typography>
          <Typography variant='body1' gutterBottom>
            It is am important tenant of modern, working, successful software
            that it is released into the hands, or in some way used by
            customers. Without that, written code has no means of providing
            value. The best way to ensure code's value is expressed, is to make
            sure that it is deployed and released to customers. Now there are
            several ways of managing the deploy and release process, but at the
            core those things cannot be done without code making it into the
            primary trunk. That is where Docket comes in. You must stay on top
            of open PRs, ensuring they have proper feedback, and eventually are
            merged.
          </Typography>
          <Typography variant='h5' gutterBottom>
            Why Not Github
          </Typography>
          <Typography variant='body1' gutterBottom>
            We would of course love to need fewer tools to manage ourselves, but
            alas Github currently has a few gaps and Docket covers those gaps.
            The day these gaps are covered by Github is the day you will see
            Docket concede to the consolidation of tools.
            <Typography variant='h6' gutterBottom>
              Missing Features
            </Typography>
            <ul>
              <li>Easily view open PRs across all your orgs</li>
              <li>Readily merge multiple PRs that have passed checks</li>
              <li>Convenient view for a dashboard screen</li>
              <li>
                Highlighting PR age to know which needs to be addressed sooner
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
