import { Get } from './requests'
import { Auth } from './auth'

export class Users {
  static getUser() {
    return Get(getUserEndpoint, undefined, Auth.appendHeaders())
      .then(({ data }) => data)
      .catch((error) => {
        return error
      })
  }
}

const getUserEndpoint = '/user'
