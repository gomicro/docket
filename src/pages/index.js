import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Header } from '../components/header'

import { Github } from './github'
import { Home } from './home'
import { Logout } from './logout'
import { Login } from './login'
import { NotFound } from './not_found'

export const Pages = () => (
  <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />

      <Route path='/github' component={Github} />
      <Route path='/login' component={Login} />
      <Route path='/logout' component={Logout} />

      <Route path='/404' component={NotFound} />
      <Route component={() => <Redirect to='/404' />} />
    </Switch>
  </>
)
