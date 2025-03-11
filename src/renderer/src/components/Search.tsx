import { Search } from '@mui/icons-material'
import { Box, InputAdornment, TextField } from '@mui/material'

type Props = {
  value?: string
  type?: string
  placeholder?: string
  onChange?: (e: any) => void
  width?: number | string
}

function SearchInput({ value, type, placeholder, onChange, width }: Props): JSX.Element {
  return (
    <Box
      sx={{
        width: width ? width : 250
      }}
    >
      <TextField
        size="small"
        value={value}
        onChange={onChange}
        sx={{
          flex: 1,
          '& .MuiInputBase-input': {
            fontSize: 12
          },
          color: '#6A6D70'
        }}
        fullWidth={true}
        type={type === '' ? 'text' : type}
        placeholder={placeholder}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search fontSize="small" />
              </InputAdornment>
            )
          }
        }}
      />
    </Box>
  )
}

export default SearchInput
