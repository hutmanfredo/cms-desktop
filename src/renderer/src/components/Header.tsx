import { Box, Button, InputBase, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'

type Props = {
  headerTxt: string
  value?: string
  placeholder?: string
  onChange?: (e: any) => void
}

function Header({ headerTxt }: Props): JSX.Element {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: 23,
          fontWeight: '600',
          color: '#6A6D70'
        }}
      >
        {headerTxt}
      </Typography>
    </Box>
  )
}

export default Header
