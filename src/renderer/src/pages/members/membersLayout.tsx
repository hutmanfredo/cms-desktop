import { Box } from '@mui/material'
import Header from '@renderer/components/Header'
import { Outlet } from 'react-router'

function MembersLayout(): JSX.Element {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Header headerTxt="Members" />
      <Outlet />
    </Box>
  )
}

export default MembersLayout
