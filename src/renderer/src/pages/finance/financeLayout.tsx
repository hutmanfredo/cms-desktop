import { Box } from '@mui/material'
import Header from '@renderer/components/Header'
import useGlobalContext from '@renderer/context/context'
import { Outlet } from 'react-router'

function FinanceLayout(): JSX.Element {
  const { headerSubTitle } = useGlobalContext()
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        // background: 'red',
        boxSizing: 'border-box'
      }}
    >
      <Header headerTxt={`Finance / ${headerSubTitle}`} />
      <Outlet />
    </Box>
  )
}

export default FinanceLayout
