import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { App } from './app'
import { ErrorBoundary } from './error_boundary'
import { InternalServer } from './pages/internal_server'

ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <ErrorBoundary>
      <Switch>
        <Route path='/500' component={InternalServer} />
        <App />
      </Switch>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
)
