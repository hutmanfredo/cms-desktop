import { Autocomplete, Stack, TextField, Typography } from '@mui/material'

type Value = {
  id: number
  label: string
}
type Props = {
  label?: string
  value?: string | number
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  data?: Value | any
  handleChange?: (e: any, newValue: Value | any) => void
}

const AutoComplete = ({ label, placeholder, data, handleChange }: Props): JSX.Element => {
  const options: Value[] = data
  return (
    <Stack
      sx={{
        width: '100%'
      }}
    >
      <Typography variant="body1" sx={{ fontSize: 12, fontWeight: '500' }}>
        {label}
      </Typography>

      <Autocomplete
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
            placeholder={placeholder}
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
      />
    </Stack>
  )
}

export default AutoComplete
