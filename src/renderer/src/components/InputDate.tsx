import { Stack, TextField, Typography } from '@mui/material'

type Props = {
  label?: string
  value?: string | number
  type?: string
  placeholder?: string
  onChange?: (e: any) => void
  width?: number | string
}

function InputDate({ label, value, onChange }: Props): JSX.Element {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="body1" sx={{ fontSize: 12, fontWeight: '500' }}>
        {label}
      </Typography>
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
        type="date"
      />
    </Stack>
  )
}

export default InputDate
