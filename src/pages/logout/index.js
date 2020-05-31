import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

export const Logout = () => {
  useEffect(() => {}, [])

  return <Redirect to='/' />
}
