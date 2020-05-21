import { Get } from './requests'
import { Auth } from './auth'

export class Orgs {
  static getOrgs() {
    return Get(getUsersOrgsEndpoint, undefined, Auth.appendHeaders())
      .then(({ data }) => data)
      .catch((error) => {
        throw error
      })
  }
}

const getUsersOrgsEndpoint = '/user/orgs'
