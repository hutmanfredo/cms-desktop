import { MenuItem, Stack, TextField, Typography } from '@mui/material'

type Options = {
  title: string
  value: string
}

type Props = {
  label?: string
  value?: string | number
  type?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  select?: boolean
  data?: Options[]
  defaultValue?: string | number
  onChange?: (e: any) => void
  onBlur?: (e: any) => void
  onKeyDown?: (e: any) => void
  onClick?: (e: any) => void
}

const TextInput = ({
  label,
  value,
  type,
  placeholder,
  disabled,
  select,
  data,
  readOnly,
  defaultValue,
  onChange,
  onBlur,
  onKeyDown,
  onClick
}: Props): JSX.Element => {
  return (
    <Stack
      sx={{
        width: '100%'
      }}
    >
      <Typography variant="body1" sx={{ fontSize: 12, fontWeight: '500' }}>
        {label}
      </Typography>

      {select ? (
        <TextField
          variant="outlined"
          size="small"
          select
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          sx={{
            '& .MuiSelect-select': { fontSize: 12 },
            '& .MuiInputBase-root': {
              lineHeight: 'normal'
            },
            color: '#878685'
          }}
          fullWidth={true}
          placeholder={placeholder}
          disabled={disabled ? true : false}
          defaultValue="none"
          slotProps={{
            input: {
              readOnly: readOnly ? true : false
            }
          }}
        >
          <MenuItem dense={true} sx={{ fontSize: 12 }} value="none">
            <em>
              <Typography variant="body1" sx={{ fontSize: 12 }}>
                {placeholder !== '' ? placeholder : 'Select an option'}
              </Typography>
            </em>
          </MenuItem>
          {data?.map((option) => (
            <MenuItem
              onClick={onClick}
              dense={true}
              sx={{ fontSize: 12 }}
              key={option.value}
              value={option.value}
            >
              {option.title}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        <TextField
          variant="outlined"
          size="small"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          sx={{
            '& .MuiInputBase-input': {
              fontSize: 12
            },
            color: '#878685'
          }}
          fullWidth={true}
          type={type === '' ? 'text' : type}
          placeholder={placeholder}
          disabled={disabled ? true : false}
          slotProps={{
            input: {
              readOnly: readOnly ? true : false
            }
          }}
          // readOnly={readOnly ? true : false}
          // step={0.01}
          defaultValue={defaultValue}
        />
      )}
    </Stack>
  )
}

export default TextInput
