import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import { Auth } from '../../clients/github'

export const Logout = () => {
  useEffect(() => {
    Auth.clearToken()
  }, [])

  return <Redirect to='/' />
}
