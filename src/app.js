import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { Provider } from './context'
import { Alerts } from './components/alerts'
import { Pages } from './pages'

export const App = () => (
  <>
    <GlobalStyle />
    <Provider>
      <>
        <Alerts />
        <Pages />
      </>
    </Provider>
  </>
)

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`
