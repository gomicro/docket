import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { ErrorBoundary } from './error_boundary'
import { Pages } from './pages'

export const App = () => (
  <ErrorBoundary>
    <GlobalStyle />
    <Pages />
  </ErrorBoundary>
)

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
  }
`
