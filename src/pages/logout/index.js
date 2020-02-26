import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import { Auth } from '../../clients/github'
import { Context } from 'context'

export const Logout = () => {
  const { app } = useContext(Context)

  useEffect(() => {
    app.auth().signOut()
  }, [])

  return <Redirect to='/' />
}
