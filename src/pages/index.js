import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Auth } from '../clients/github'

import { Header } from '../components/header'

import { Home } from './home'
import { Logout } from './logout'
import { Login } from './login'
import { NotFound } from './not_found'

export const Pages = () => (
  <>
    <Header />
    <Switch>
      <AuthedRoute exact path='/' component={Home} />

      <Route path='/login' component={Login} />
      <Route path='/logout' component={Logout} />

      <Route path='/404' component={NotFound} />
      <Route component={() => <Redirect to='/404' />} />
    </Switch>
  </>
)

const AuthedRoute = ({ component: Component, ...rest }) =>
  Auth.authed() ? (
    <Route component={Component} {...rest} />
  ) : (
    <Redirect to='/login' />
  )
