import React from 'react'
import { Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Card,
  CardContent,
  CardHeader,
  Toolbar,
  Typography,
} from '@material-ui/core'

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

export const InternalServer = () => {
  const classes = useStyles()

  return (
    <>
      <GlobalStyle />
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Docket</Typography>
        </Toolbar>
      </AppBar>
      <Card className={classes.card}>
        <CardHeader title='500 Internal Server Error' />
        <CardContent>
          <Typography
            className={classes.cardContent}
            variant='body2'
            color='textSecondary'
            component='p'
          >
            Welp, here's hoping you know what you did, cause we sure don't.
            Hopefully the problem is solved by now and you're free to return{' '}
            <Link to='/'>Home</Link>.
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
  }
`
