import { Get } from './requests'
import { Auth } from './auth'

export class PullRequests {
  static getOrgPullRequests({ org }) {
    const params = `q=is:open+is:pr+user:${org}`

    return Get(getOrgPullRequestsEndpoint, params, Auth.appendHeaders())
      .then(({ data = {} }) => data.items)
      .catch(error => {
        if (error.response.status !== 422) {
          throw error
        }

        return {}
      })
  }

  static getPullRequests({ orgNames = [] }) {
    return Promise.all(
      orgNames.map(org =>
        this.getOrgPullRequests({ org })
          .then((items = []) => {
            return items.map(
              ({
                repository_url: repoURL,
                html_url: link,
                title,
                labels,
                id,
                number,
                created_at: createdAt,
              }) => ({
                repo: repoURL.split('/').pop(),
                link,
                org,
                number,
                title,
                labels,
                id,
                createdAt,
              }),
            )
          })
          .catch(() => []),
      ),
    )
      .then(results => {
        const newPRs = []
        results.forEach(r => {
          newPRs.push(...r)
        })
        return newPRs
      })
      .catch(error => {
        throw error
      })
  }

  static getReviewStatus({ repo, org, number }) {
    const endpoint = `/repos/${org}/${repo}/pulls/${number}/reviews`

    return Get(endpoint, undefined, Auth.appendHeaders())
      .then(({ data }) => data)
      .catch(error => {
        throw error
      })
  }
}

const getOrgPullRequestsEndpoint = '/search/issues'
