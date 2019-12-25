import React, { useState } from 'react'

const Context = React.createContext({})

export const Consumer = Context.Consumer

export const Provider = ({ children }) => {
  const defaultRefresh = 5 * 60 * 1000
  const [autoRefresh, setAutoRefresh] = useState(defaultRefresh)

  const providerValue = {
    autoRefresh,
    setAutoRefresh,
  }

  return <Context.Provider value={providerValue}>{children}</Context.Provider>
}
