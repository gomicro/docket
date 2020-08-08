import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Header } from '../components/header'
import { Footer } from '../components/footer'

import { Home } from './home'
import { Logout } from './logout'
import { Login } from './login'
import { NotFound } from './not_found'

export const Pages = () => (
  <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />

      <Route path='/logout' component={Logout} />
      <Route path='/login' component={Login} />

      <Route path='/404' component={NotFound} />
      <Route component={() => <Redirect to='/404' />} />
    </Switch>
    <Footer />
  </>
)
