import { Close } from '@mui/icons-material'
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import AutoComplete from '../Autocomplete'

type Value = {
  id: number
  label: string
}

type Props = {
  open: boolean
  handleClose: () => void
  handleChange?: (event: any, newValue: Value | any) => void
  data?: Value | any
  onClick?: () => void
}

function IncomeOffering({ open, handleClose, handleChange, data, onClick }: Props): JSX.Element {
  const options: Value[] = data
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
          Offering
        </Typography>
        <IconButton size="small" onClick={handleClose}>
          <Close fontSize="small" />
        </IconButton>
      </Box>
      <DialogContent>
        <Stack spacing={2}>
          <AutoComplete
            label="Event/Service"
            data={options}
            placeholder="Search event/service"
            handleChange={handleChange}
          />
          {/* <Autocomplete
            options={options}
            size="small"
            fullWidth={true}
            freeSolo
            disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                size="small"
                fullWidth={true}
                placeholder="Search event/service"
                sx={{
                  '& .MuiInputBase-input': {
                    fontSize: 12
                  },
                  color: '#878685'
                }}
              />
            )}
            onChange={handleChange}
            slotProps={{
              paper: {
                sx: {
                  '& .MuiAutocomplete-listbox': {
                    fontSize: 12
                  }
                }
              }
            }}
          /> */}

          <Button
            onClick={onClick}
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
            Select
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default IncomeOffering
