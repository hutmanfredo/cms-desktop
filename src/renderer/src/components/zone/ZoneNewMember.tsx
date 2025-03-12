import { Add, Close } from '@mui/icons-material'
import { Box, Button, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material'
import TextInput from '../TextInput'
import SearchInput from '../Search'
import { useState } from 'react'
import AutoComplete from '../Autocomplete'

type Props = {
  open: boolean
  handleClose: () => void
}

type Value = {
  id: number
  label: string
}

const members: Value[] = [
  {
    id: 12345,
    label: 'Francis Quartey'
  },
  {
    id: 1234,
    label: 'David Quartey'
  }
]

function ZoneNewMember({ open, handleClose }: Props): JSX.Element {
  const [search, setSearch] = useState<string>('')
  const [value, setValue] = useState<Value | null>()

  const handleChange = (event: any, newValue: Value | any): void => {
    setValue(newValue)
  }

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
          <AutoComplete
            label="Member"
            data={members}
            placeholder="Search member"
            handleChange={handleChange}
          />

          <Button
            variant="contained"
            size="small"
            disableElevation
            disableRipple
            disableTouchRipple
            sx={{
              fontSize: 12,
              fontWeight: '500',
              textTransform: 'none',
              // backgroundColor: '#64c1ff',
              color: '#fff',
              '&:hover': {
                color: '#ddd'
              }
            }}
          >
            Add
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default ZoneNewMember
