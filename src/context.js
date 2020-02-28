import React, { useEffect, useState } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: `${FB_API_KEY}`,
  authDomain: 'docket.gomicro.io',
  projectId: `${FB_PROJECT_ID}`,
})

export const Context = React.createContext({})

export const Provider = ({ children }) => {
  const defaultRefresh = 5 * 60 * 1000
  const [autoRefresh, setAutoRefresh] = useState(defaultRefresh)

  const [alerts, setAlerts] = useState([])
  const addAlert = (alert, timeout = null) =>
    setAlerts(alerts.concat([{ alert, timeout }]))

  const [user, setUser] = useState(null)

  useEffect(() => {
    app.auth().onAuthStateChanged(setUser)
  }, [])

  const providerValue = {
    app,
    addAlert,
    alerts,
    autoRefresh,
    setAutoRefresh,
    user,
  }

  return <Context.Provider value={providerValue}>{children}</Context.Provider>
}
