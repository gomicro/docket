import React from 'react'
import { useLocation } from 'react-router-dom'

import { Oauth } from '../../clients/github'

export const Github = () => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)

  const code = params.get('code')

  if (!code || code === '') {
    return <h1>Failed to complete auth</h1>
  }

  Oauth.accessToken({ code })
    .then((token) => console.log(token))
    .catch((error) => console.log(error))

  return <></>
}
