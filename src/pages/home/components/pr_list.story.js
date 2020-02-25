import React from 'react'
import { storiesOf } from '@storybook/react'
import moment from 'moment'
import { PRList } from './pr_list'

storiesOf('Pages/Home/PR Lists', module)
  .add('empty', () => <PRList />)
  .add('with PRs', () => <PRList prs={validPRs} />)

const validPRs = [
  {
    id: 'd0e4b7f3-c6b1-4830-872f-42e25211629a',
    org: 'gomicro',
    repo: 'docket',
    link: 'https://github.com/gomicro/docket',
    createdAt: moment().subtract(1, 'second'),
  },
  {
    id: '72e46fff-1db1-4e38-a8b0-0e5fae56fa2f',
    org: 'gomicro',
    repo: 'docket',
    link: 'https://github.com/gomicro/docket',
    createdAt: moment().subtract(5, 'second'),
  },
  {
    id: '7e915999-9c43-4dad-8b52-ad368a65ad43',
    org: 'gomicro',
    repo: 'steward',
    link: 'https://github.com/gomicro/steward',
    createdAt: moment().subtract(1, 'minutes'),
  },
  {
    id: 'abe6a47a-b06e-4eea-8fb3-3d2b77443689',
    org: 'gomicro',
    repo: 'steward',
    link: 'https://github.com/gomicro/steward',
    createdAt: moment().subtract(5, 'minutes'),
  },
  {
    id: '225f7380-0996-474b-b8ec-841ab40436d6',
    org: 'gomicro',
    repo: 'bogus',
    link: 'https://github.com/gomicro/train',
    createdAt: moment().subtract(1, 'hour'),
  },
  {
    id: 'd4e9c107-7f1d-4a22-b236-996600ba00ce',
    org: 'gomicro',
    repo: 'bogus',
    link: 'https://github.com/gomicro/train',
    createdAt: moment().subtract(5, 'hour'),
  },
  {
    id: '0332041c-bb3b-4cc5-a5d9-667b1709aa9d',
    org: 'gomicro',
    repo: 'bogus',
    link: 'https://github.com/gomicro/bogus',
    createdAt: moment().subtract(1, 'day'),
  },
  {
    id: '7e867223-b2e5-4e77-90ff-841a52b8c2e9',
    org: 'gomicro',
    repo: 'bogus',
    link: 'https://github.com/gomicro/bogus',
    createdAt: moment().subtract(5, 'day'),
  },
  {
    id: '815342fb-ad46-48b9-a4d3-8e3486a13e5c',
    org: 'gomicro',
    repo: 'duty',
    link: 'https://github.com/gomicro/duty',
    createdAt: moment().subtract(1, 'week'),
  },
  {
    id: '5017866b-87d9-4c99-90b8-30eeb7409d6f',
    org: 'gomicro',
    repo: 'duty',
    link: 'https://github.com/gomicro/duty',
    createdAt: moment().subtract(5, 'week'),
  },
  {
    id: '66ba4dd5-2808-4b9d-b03e-4d0dfcbc5b08',
    org: 'gomicro',
    repo: 'penname',
    link: 'https://github.com/gomicro/penname',
    createdAt: moment().subtract(1, 'month'),
  },
  {
    id: 'f5358e7e-2ab7-4286-b60a-eb2c91d18838',
    org: 'gomicro',
    repo: 'penname',
    link: 'https://github.com/gomicro/penname',
    createdAt: moment().subtract(5, 'month'),
  },
  {
    id: '31ed531b-baec-4692-a07b-e4039801ec80',
    org: 'gomicro',
    repo: 'penname',
    link: 'https://github.com/gomicro/penname',
    createdAt: moment().subtract(1, 'year'),
  },
  {
    id: 'c71f1d54-ff19-4fd7-8b0d-c6b1b8c22180',
    org: 'gomicro',
    repo: 'penname',
    link: 'https://github.com/gomicro/penname',
    createdAt: moment().subtract(2, 'year'),
  },
]
