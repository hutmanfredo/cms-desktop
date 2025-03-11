import { Box } from '@mui/material'
import TopBarWithArrowBack from '@renderer/components/TopBarWithArrowBack'
import React from 'react'
import { useNavigate } from 'react-router'

function NewFinance(): JSX.Element {
  const navigate = useNavigate()
  return <TopBarWithArrowBack onClick={() => navigate(-1)} />
}

export default NewFinance
