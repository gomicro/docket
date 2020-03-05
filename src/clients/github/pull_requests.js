import { Get, Put } from './requests'
import { Auth } from './auth'

export class PullRequests {
  static searchIssues({ query }) {
    const params = `q=${query}`

    return Get(searchIssuesEndpoint, params, Auth.appendHeaders())
      .then(({ data = {} }) => data.items)
      .catch(error => {
        if (error.response.status !== 422) {
          throw error
        }

        return {}
      })
  }

  static getOrgPullRequests({ org }) {
    return this.searchIssues({ query: `is:open+is:pr+user:${org}` })
  }

  static getUserPullRequests({ username }) {
    return this.searchIssues({ query: `is:open+is:pr+author:${username}` })
  }

  static getPullRequests({ orgNames = [], username }) {
    const promises = orgNames.map(org =>
      this.getOrgPullRequests({ org })
        .then((items = []) =>
          items.map(
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
          ),
        )
        .catch(() => []),
    )

    promises.push(
      this.getUserPullRequests({ username })
        .then((items = []) =>
          items.map(
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
              org: link
                .split('github.com/')
                .pop()
                .split('/')
                .shift(),
              number,
              title,
              labels,
              id,
              createdAt,
            }),
          ),
        )
        .catch(() => []),
    )

    return Promise.all(promises)
      .then(results => {
        const prs = []
        results.forEach(result => {
          prs.push(...result)
        })
        return prs
      })
      .then(prs =>
        prs.reduce(
          (unique, pr) =>
            !unique.find(p => p.id === pr.id) ? unique.concat([pr]) : unique,
          [],
        ),
      )
      .catch(error => {
        throw error
      })
  }

  static getPullRequest({ repo, org, number }) {
    const endpoint = `/repos/${org}/${repo}/pulls/${number}`

    return Get(endpoint, undefined, Auth.appendHeaders())
      .then(({ data }) => data)
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

  static getChecks({ repo, org, ref }) {
    const endpoint = `/repos/${org}/${repo}/commits/${ref}/check-suites`

    const headers = {
      Accept: 'application/vnd.github.antiope-preview+json',
      'Content-Type': 'application/json',
    }

    return Get(endpoint, undefined, Auth.appendHeaders(headers))
      .then(({ data }) => data)
      .catch(error => {
        throw error
      })
  }

  static mergePullRequest({ repo, org, number }) {
    const endpoint = `/repos/${org}/${repo}/pulls/${number}/merge`
    const body = {
      commit_message: `Merging PR #${number}`,
    }

    return Put(endpoint, undefined, Auth.appendHeaders(), body)
      .then(({ merged }) => merged)
      .catch(error => {
        throw error
      })
  }
}

const searchIssuesEndpoint = '/search/issues'
