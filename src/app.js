import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { ErrorBoundary } from './error_boundary'
import { Provider } from './context'
import { Pages } from './pages'

export const App = () => (
  <ErrorBoundary>
    <GlobalStyle />
    <Provider>
      <Pages />
    </Provider>
  </ErrorBoundary>
)

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
  }
`
