import React from 'react'

import { PRListItem } from './pr_list_item'

import { List } from '@material-ui/core'

export const PRList = ({ prs = [] }) => (
  <List dense disablePadding>
    {prs.map((pr) => (
      <PRListItem key={`${pr.org}:${pr.repo}:${pr.id}`} pr={pr} />
    ))}
  </List>
)
