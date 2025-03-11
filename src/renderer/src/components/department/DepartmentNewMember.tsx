import { Add, Close } from '@mui/icons-material'
import { Box, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material'
import TextInput from '../TextInput'
import SearchInput from '../Search'
import { useState } from 'react'

type Props = {
  open: boolean
  handleClose: () => void
}

function DepartmentNewMember({ open, handleClose }: Props): JSX.Element {
  const [search, setSearch] = useState<string>('')
  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth="xs"
      PaperProps={{
        component: 'form'
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0
          // zIndex: 1
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: 16,
            fontWeight: '600',
            color: '#6A6D70'
          }}
        >
          New member
        </Typography>
        <IconButton size="small" onClick={handleClose}>
          <Close fontSize="small" />
        </IconButton>
      </Box>
      <DialogContent>
        <Stack spacing={2}>
          <SearchInput
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            placeholder={'Search for member'}
            type="search"
            width="100%"
          />

          <Box sx={{ width: '100%', userSelect: 'none' }}> 
            <Stack spacing={1}>
              <Typography variant="subtitle2" sx={{ fontSize: 12, fontWeight: '500' }}>
                Search results
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: 1,
                  border: '1px solid #ddd',
                  borderRadius: 2
                }}
              >
                <Typography variant="body1" sx={{ fontSize: 12, fontWeight: '500' }}>
                  Francis Quartey
                </Typography>
                <Add fontSize="inherit" />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default DepartmentNewMember
