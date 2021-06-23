import React from 'react'

import { PRListItem } from './pr_list_item'
import { NoPRs } from '../../../assets/images/no_prs'

import { List, Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  noPRs: {
    maxWidth: '80%',
    maxHeight: 400,
    padding: theme.spacing(2),
    margin: 'auto',
    display: 'block',
  },
  divider: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
}))

export const PRList = ({ prs = [] }) => {
  const classes = useStyles()

  return (
    <List dense>
      {(prs.length === 0 && <NoPRs className={classes.noPRs} />) || (
        <CompositPRList prs={prs} />
      )}
    </List>
  )
}

const CompositPRList = ({ prs = [] }) => {
  const nonReleases = prs.filter((pr) => pr.title !== 'Release')
  const releases = prs.filter((pr) => pr.title === 'Release')

  return (
    <>
      {nonReleases.map((pr) => (
        <PRListItem key={`${pr.org}:${pr.repo}:${pr.id}`} pr={pr} />
      ))}
      {prs.length !== 0 && <ReleaseDivider />}
      {releases.map((pr) => (
        <PRListItem key={`${pr.org}:${pr.repo}:${pr.id}`} pr={pr} />
      ))}
    </>
  )
}

const ReleaseDivider = () => {
  const classes = useStyles()
  return (
    <>
      <Divider component='li' />
      <li>
        <Typography
          className={classes.divider}
          color='textSecondary'
          display='block'
          variant='caption'
        >
          Releases
        </Typography>
      </li>
    </>
  )
}
