import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app'
import { ErrorBoundary } from './error_boundary'

ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
)
