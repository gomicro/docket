import { makeStyles } from '@material-ui/core/styles'

export const cardStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(4),

    '& .MuiCardContent-root:last-child': {
      paddingBottom: 0,
    },
  },
  cardTitle: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    borderBottom: `1px solid ${theme.palette.grey['300']}`,
  },
  cardContent: {
    padding: 0,
    maxHeight: '33vh',
    overflow: 'scroll',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}))
