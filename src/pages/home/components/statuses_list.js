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

export const StatusesList = ({ statuses = [] }) => (
  <List dense disablePadding>
    {statuses.map(s => (
      <ListItem
        dense
        key={`${s.id}`}
        button
        component='a'
        href={s.link}
        target='_blank'
      >
        <ListItemIcon>
          <MergeType />
        </ListItemIcon>
        <ListItemText primary={`#${s.slug}`} secondary={s.active} />
        <ListItemSecondaryAction>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
)
