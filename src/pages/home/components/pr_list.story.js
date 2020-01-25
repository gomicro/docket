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
    id: 'd0e4b7f3-c6b1-4830-872f-42e25211629a',
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
    id: '7e915999-9c43-4dad-8b52-ad368a65ad43',
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
    id: '225f7380-0996-474b-b8ec-841ab40436d6',
    org: 'gomicro',
    repo: 'bogus',
    link: 'https://github.com/gomicro/train',
    createdAt: moment().subtract(5, 'hour'),
  },
  {
    id: '225f7380-0996-474b-b8ec-841ab40436d6',
    org: 'gomicro',
    repo: 'bogus',
    link: 'https://github.com/gomicro/bogus',
    createdAt: moment().subtract(1, 'day'),
  },
  {
    id: '225f7380-0996-474b-b8ec-841ab40436d6',
    org: 'gomicro',
    repo: 'bogus',
    link: 'https://github.com/gomicro/bogus',
    createdAt: moment().subtract(5, 'day'),
  },
  {
    id: '225f7380-0996-474b-b8ec-841ab40436d6',
    org: 'gomicro',
    repo: 'duty',
    link: 'https://github.com/gomicro/duty',
    createdAt: moment().subtract(1, 'week'),
  },
  {
    id: '225f7380-0996-474b-b8ec-841ab40436d6',
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
    id: '66ba4dd5-2808-4b9d-b03e-4d0dfcbc5b08',
    org: 'gomicro',
    repo: 'penname',
    link: 'https://github.com/gomicro/penname',
    createdAt: moment().subtract(5, 'month'),
  },
  {
    id: '66ba4dd5-2808-4b9d-b03e-4d0dfcbc5b08',
    org: 'gomicro',
    repo: 'penname',
    link: 'https://github.com/gomicro/penname',
    createdAt: moment().subtract(1, 'year'),
  },
  {
    id: '66ba4dd5-2808-4b9d-b03e-4d0dfcbc5b08',
    org: 'gomicro',
    repo: 'penname',
    link: 'https://github.com/gomicro/penname',
    createdAt: moment().subtract(2, 'year'),
  },
]
