import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Header } from '../components/header'
import { Login } from './login'

export const Pages = () => (
  <>
    <Header />
    <Switch>
      <Route path='/login' component={Login} />
    </Switch>
  </>
)
