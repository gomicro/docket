import React from 'react'

import { AppBar, Toolbar } from '@material-ui/core'

import { Title } from './title'

export const Header = () => (
  <AppBar position='static'>
    <Toolbar>
      <Title />
    </Toolbar>
  </AppBar>
)
