/* global CLIENT_ID, CLIENT_SECRET */

import { Post } from './requests.js'

const state = 'e750a5ef-3152-4892-bec8-3e20ad46cc98'

export class Oauth {
  static authorizeRedirect() {
    if (CLIENT_ID === undefined || CLIENT_ID === '') {
      const err = 'client id for github not set'
      throw err
    }

    const githubUri = new URL('https://github.com')
    githubUri.pathname = githubOauthAuthorizeEndpoint

    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      scope: 'repo',
      state,
    })
    githubUri.search = params.toString()

    return githubUri.toString()
  }

  static accessToken({ code }) {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    }

    const body = new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    })

    return Post(
      githubOauthAccessTokenEndpoint,
      undefined,
      headers,
      body.toString(),
    )
      .then(resp => resp.access_token)
      .catch(error => {
        throw error
      })
  }
}

const githubOauthAuthorizeEndpoint = '/login/oauth/authorize'
const githubOauthAccessTokenEndpoint = '/login/oauth/access_token'
