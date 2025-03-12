import { Add, Close, Send } from '@mui/icons-material'
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

const zone: Value[] = [
  {
    id: 12345,
    label: 'Zone 1'
  },
  {
    id: 1234,
    label: 'Zone'
  }
]

function ZoneTransfer({ open, handleClose }: Props): JSX.Element {
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
          Transfer member
        </Typography>
        <IconButton size="small" onClick={handleClose}>
          <Close fontSize="small" />
        </IconButton>
      </Box>
      <DialogContent>
        <Stack spacing={2}>
          {/* <Stack spacing={1}>
            <TextInput label="New zone" select />
          </Stack> */}
          <TextInput label="Current zone" readOnly={true} />

          <AutoComplete
            label="New zone"
            data={zone}
            placeholder="Search zone"
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
            Transfer
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default ZoneTransfer
