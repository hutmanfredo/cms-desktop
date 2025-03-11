import { Box, IconButton, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

type Props = {
  onClick?: () => void
  title?: string
}

function TopBarWithArrowBack({ onClick, title }: Props): JSX.Element {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between'
        gap: 2
      }}
    >
      <IconButton onClick={onClick} size="small">
        <ArrowBack fontSize="small" />
      </IconButton>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: 16,
          fontWeight: '600',
          color: '#6A6D70'
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default TopBarWithArrowBack
