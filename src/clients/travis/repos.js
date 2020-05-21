import { Get } from './requests'
import { Auth } from './auth'
import Mustache from 'mustache'

export class Repos {
  static getRepos() {
    const params = {
      limit: 1,
    }

    return Get(getReposEndpoint, params, Auth.appendHeaders())
      .then(({ data }) => data.repositories)
      .catch((error) => {
        throw error
      })
  }

  static getBranches({ slug }) {
    const params = {}

    const endpoint = Mustache.render(getReposBranchesEndpoint, {
      slug: slug,
    })

    return Get(endpoint, params, Auth.appendHeaders())
      .then(({ data }) => data)
      .catch((error) => {
        throw error
      })
  }
}

const getReposEndpoint = '/repos'
const getReposBranchesEndpoint = '/repo/{{slug}}/branches'
