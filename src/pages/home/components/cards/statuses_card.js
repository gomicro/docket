import React, { useState } from 'react'

import { cardStyles } from './card_styles'
import { Refresh, MoreVert } from '@material-ui/icons'
import { TravisIcon } from '../../../../assets/icons/travis'
import { Card, IconButton, CardHeader } from '@material-ui/core'

export const StatusesCard = () => {
  const [lastUpdated, setLastUpdated] = useState('null')

  const classes = cardStyles()

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<TravisIcon />}
        className={classes.cardTitle}
        title={'Statuses'}
        titleTypographyProps={{ variant: 'body1' }}
        subheader={`Last Updated: ${lastUpdated}`}
        subheaderTypographyProps={{ variant: 'body2' }}
        action={
          <>
            <IconButton aria-label='refresh'>
              <Refresh />
            </IconButton>
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          </>
        }
      />
    </Card>
  )
}
