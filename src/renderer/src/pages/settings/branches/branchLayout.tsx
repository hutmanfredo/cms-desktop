import { Box } from '@mui/material'
import Header from '@renderer/components/Header'
import React from 'react'
import { Outlet } from 'react-router'

function BranchesLayout(): JSX.Element {
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
      <Header headerTxt="Branches" />
      <Outlet />
    </Box>
  )
}

export default BranchesLayout
