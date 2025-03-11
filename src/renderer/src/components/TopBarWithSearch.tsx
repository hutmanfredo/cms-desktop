import { Box, Button, Stack } from '@mui/material'
import SearchInput from './Search'
import { Add } from '@mui/icons-material'
import InputDate from './InputDate'
import TextInput from './TextInput'

type Props = {
  value?: string
  defaultValue?: string
  filtervalue?: string
  from?: string | number
  to?: string | number
  placeholder?: string
  onChange?: (e: any) => void
  fromChange?: (e: any) => void
  toChange?: (e: any) => void
  filterChange?: (e: any) => void
  btnTxt?: string
  onClick?: () => void
  itype?: string
  filter?: 'yes' | 'no'
}

function TopBarWithSearch({
  value,
  filtervalue,
  defaultValue,
  from,
  to,
  placeholder,
  onChange,
  fromChange,
  toChange,
  filterChange,
  btnTxt,
  onClick,
  itype,
  filter
}: Props): JSX.Element {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {itype === 'dateselect' ? (
        <Stack spacing={1} direction="row">
          {filter === 'yes' && (
            <TextInput
              value={filtervalue}
              onChange={filterChange}
              select={true}
              defaultValue={defaultValue}
              placeholder={placeholder}
            />
          )}
          <InputDate label="From" value={from} onChange={fromChange} />
          <InputDate label="To" value={to} onChange={toChange} />
        </Stack>
      ) : (
        <SearchInput value={value} onChange={onChange} placeholder={placeholder} type="search" />
      )}

      {btnTxt !== '' && (
        <Button
          onClick={onClick}
          variant="contained"
          size="small"
          disableElevation
          disableRipple
          disableTouchRipple
          startIcon={<Add fontSize="inherit" />}
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
          {btnTxt}
        </Button>
      )}
    </Box>
  )
}

export default TopBarWithSearch
