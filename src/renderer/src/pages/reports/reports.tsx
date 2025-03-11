import { Add } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import Header from '@renderer/components/Header'
import SearchInput from '@renderer/components/Search'
import TopBarWithSearch from '@renderer/components/TopBarWithSearch'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Reports(): JSX.Element {
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
      {/* <TopBarWithSearch
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Report"
        btnTxt="Report"
        onClick={() => navigate('newreport')}
      /> */}
    </Box>
  )
}

export default Reports
