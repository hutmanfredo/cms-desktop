import { Add } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import Header from '@renderer/components/Header'
import SearchInput from '@renderer/components/Search'
import TopBarWithSearch from '@renderer/components/TopBarWithSearch'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Finance(): JSX.Element {
  const navigate = useNavigate()
  const [search, setSearch] = useState<string>('')
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
      <TopBarWithSearch
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Finance"
        btnTxt="Finance"
        onClick={() => navigate('newfinance')}
      />
    </Box>
  )
}

export default Finance
