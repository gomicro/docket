import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

export const Logout = () => {
  useEffect(() => {
    // remove the token
  }, [])

  return <Redirect to='/' />
}
