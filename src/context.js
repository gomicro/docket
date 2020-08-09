import React, { useState } from 'react'

export const Context = React.createContext({})

export const Provider = ({ children }) => {
  const defaultRefresh = 5 * 60 * 1000
  const [autoRefresh, setAutoRefresh] = useState(defaultRefresh)

  const [alerts, setAlerts] = useState([])
  const addAlert = (alert, timeout = null) =>
    setAlerts(alerts.concat([{ alert, timeout }]))

  const [navDrawer, setNavDrawer] = useState(false)
  const toggleNavDrawer = () => setNavDrawer(!navDrawer)

  const providerValue = {
    addAlert,
    alerts,
    autoRefresh,
    navDrawer,
    setAutoRefresh,
    toggleNavDrawer,
  }

  return <Context.Provider value={providerValue}>{children}</Context.Provider>
}
