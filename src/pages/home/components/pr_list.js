import React from 'react'

import { PRListItem } from './pr_list_item'
import { NoPRs } from '../../../assets/images/no_prs'

import { List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  noPRs: {
    maxWidth: '80%',
    maxHeight: 400,
    padding: theme.spacing(2),
    margin: 'auto',
    display: 'block',
  },
}))

export const PRList = ({ prs = [] }) => {
  const classes = useStyles()

  return (
    <List dense>
      {(prs.length === 0 && <NoPRs className={classes.noPRs} />) ||
        prs.map((pr) => (
          <PRListItem key={`${pr.org}:${pr.repo}:${pr.id}`} pr={pr} />
        ))}
    </List>
  )
}
