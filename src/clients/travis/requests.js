/* global TR_URL */

import axios from 'axios'

export function Do(method, endpoint, params, headers = {}, body) {
  if (TR_URL === undefined) {
    const err = `base url for travis client is undefined`
    throw err
  }

  const uri = new URL(TR_URL)
  uri.pathname = endpoint

  if (params instanceof URLSearchParams) {
    uri.search = params.toString()
  } else if (typeof params === 'string') {
    uri.search = params
  } else {
    const newParams = new URLSearchParams(params)
    uri.search = newParams.toString()
  }

  return axios.request({
    method: method.toLowerCase(),
    url: uri.toString(),
    headers,
    data: body,
  })
}

export function Get(endpoint, params, headers) {
  return Do('get', endpoint, params, headers, undefined)
}

export function Post(endpoint, params, headers, body) {
  return Do('post', endpoint, params, headers, body)
}

export function Put(endpoint, params, headers, body) {
  return Do('put', endpoint, params, headers, body)
}

export function Delete(endpoint, params, headers, body) {
  return Do('delete', endpoint, params, headers, body)
}
