import React, { useContext, useState } from 'react'
import { Context } from 'context'

import { IconButton, Snackbar } from '@material-ui/core'
import { Close } from '@material-ui/icons'

const Alert = ({ message, timeout = null }) => {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={message}
      autoHideDuration={timeout}
      onClose={handleClose}
      action={
        <IconButton
          key='close'
          aria-label='close'
          color='inherit'
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      }
    />
  )
}

export const Alerts = () => {
  const { alerts } = useContext(Context)

  return alerts.map((a, i) => (
    <Alert message={a.alert} key={i} timeout={a.timeout} />
  ))
}
