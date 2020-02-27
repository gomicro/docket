import React from 'react'

import { AppBar, Toolbar } from '@material-ui/core'

import { Title } from './title'
import { AutoRefreshMenu } from './auto_refresh_menu'

const AutoRefreshFeatureFlag = false

export const Header = () => (
  <AppBar position='static'>
    <Toolbar>
      <Title />
      {AutoRefreshFeatureFlag && <AutoRefreshMenu />}
    </Toolbar>
  </AppBar>
)
