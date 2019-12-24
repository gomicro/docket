import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import { Auth } from '../../client'

export const Logout = () => {
  useEffect(() => {
    Auth.clearToken()
  }, [])

  return <Redirect to='/' />
}
