import { Get } from './requests'
import { Auth } from './auth'

export class Repos {
  static getRepos() {
    const params = {
      limit: 1,
    }

    return Get(getReposEndpoint, params, Auth.appendHeaders())
      .then(({ data }) => data.repositories)
      .catch(error => {
        throw error
      })
  }
}

const getReposEndpoint = '/repos'
