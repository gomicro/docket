import { Get } from './requests'
import { Auth } from './auth'

export class Builds {
  static getBuilds() {
    const params = {
      sort_by: 'started_at:desc',
    }

    return Get(getBuildsEndpoint, params, Auth.appendHeaders())
      .then(({ data }) => data.builds)
      .catch((error) => {
        throw error
      })
  }
}

const getBuildsEndpoint = '/builds'
