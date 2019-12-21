import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Header } from '../components/header'

import { Logout } from './logout'
import { Home } from './home'
import { NotFound } from './not_found'

export const Pages = () => (
  <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route
        path='/login'
        component={() => {
          window.location.href = 'https://example.com/1234'
          return null
        }}
      />
      <Route path='/logout' component={Logout} />
      <Route path='/404' component={NotFound} />
      <Route component={() => <Redirect to='/404' />} />
    </Switch>
  </>
)
