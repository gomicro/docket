import React, { useContext } from 'react'
import { Context } from 'context'

import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

import { Title } from './title'

export const Header = () => {
  const { toggleNavDrawer } = useContext(Context)

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={toggleNavDrawer}
        >
          <Menu />
        </IconButton>
        <Title />
      </Toolbar>
    </AppBar>
  )
}
