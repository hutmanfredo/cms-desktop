import TopBarWithArrowBack from '@renderer/components/TopBarWithArrowBack'
import React from 'react'
import { useNavigate } from 'react-router'

function UpdateCell(): JSX.Element {
  const navigate = useNavigate()
  return <TopBarWithArrowBack onClick={() => navigate(-1)} />
}

export default UpdateCell