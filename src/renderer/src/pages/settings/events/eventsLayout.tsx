import { Box } from '@mui/material'
import Header from '@renderer/components/Header'
import { Outlet } from 'react-router'

function EventsLayout(): JSX.Element {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}
    >
      <Header headerTxt="Events" />
      <Outlet />
    </Box>
  )
}

export default EventsLayout
