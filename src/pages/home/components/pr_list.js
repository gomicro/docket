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

const chipVal = date => {
  const from = moment(`${date}`)
  const now = moment(moment.now())
  const diff = now.diff(from, 'seconds')

  if (now.diff(from, 'seconds') < 60) {
    return `${diff}s`
  } else if (now.diff(from, 'seconds') < 3600) {
    return `${now.diff(from, 'minutes')}m`
  } else if (now.diff(from, 'seconds') < 86400) {
    return `${now.diff(from, 'hours')}h`
  } else if (now.diff(from, 'seconds') < 604800) {
    return `${now.diff(from, 'day')}d`
  } else if (now.diff(from, 'seconds') < 2419200) {
    return `${now.diff(from, 'week')}w`
  } else if (now.diff(from, 'seconds') < 13222801) {
    return `${now.diff(from, 'month')}M`
  } else {
    return `${now.diff(from, 'year')}y`
  }
}

export const PRList = ({ prs = [] }) => (
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
          <Chip label={chipVal(pr.createdAt)} />
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
)
