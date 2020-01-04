import React from 'react'
import moment from 'moment'

import {
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import { MergeType } from '@material-ui/icons'

export const PRList = ({ prs }) => (
  <List dense disablePadding>
    {prs.map(pr => (
      <ListItem
        dense
        key={`${pr.org}:${pr.repo}:${pr.id}`}
        button
        component='a'
        href={pr.link}
        target='_blank'
      >
        <ListItemIcon>
          <MergeType />
        </ListItemIcon>
        <ListItemText primary={pr.title} secondary={`${pr.org}/${pr.repo}`} />
        <ListItemSecondaryAction>
          <Chip
            label={moment(`${pr.createdAt}`)
              .fromNow(true)
              .split(' ')
              .map((p, i) => (i !== 0 ? p[0] : p === 'a' ? 1 : p))}
          />
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
)
