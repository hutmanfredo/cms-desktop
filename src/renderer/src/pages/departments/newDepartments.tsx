import { Box, Button, Stack } from '@mui/material'
import Grid from '@mui/material/Grid2'
import AutoComplete from '@renderer/components/Autocomplete'
import TextInput from '@renderer/components/TextInput'
import TopBarWithArrowBack from '@renderer/components/TopBarWithArrowBack'
import { useState } from 'react'
import { useNavigate } from 'react-router'

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

function NewDepartment(): JSX.Element {
  const navigate = useNavigate()
  const [valueHead, setValueHead] = useState<Value | null>()
  const [valuePresident, setValuePresident] = useState<Value | null>()
  const [valueAssistant, setValueAssistant] = useState<Value | null>()

  const handleChangeHead = (event: any, newValue: Value | any): void => {
    setValueHead(newValue)
  }
  const handleChangePresident = (event: any, newValue: Value | any): void => {
    setValuePresident(newValue)
  }
  const handleChangeAssistant = (event: any, newValue: Value | any): void => {
    setValueAssistant(newValue)
  }

  return (
    <>
      <TopBarWithArrowBack onClick={() => navigate(-1)} title="New Department" />
      <Box
        sx={{
          mt: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'auto',
          scrollbarWidth: 'none'
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: '60%'
            }
          }}
        >
          <Stack spacing={1}>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Department name" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <AutoComplete label="Head" data={members} handleChange={handleChangeHead} />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <AutoComplete
                  label="President"
                  data={members}
                  handleChange={handleChangePresident}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <AutoComplete
                  label="Assistant"
                  data={members}
                  handleChange={handleChangeAssistant}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Button
                variant="contained"
                size="small"
                disableElevation
                disableRipple
                disableTouchRipple
                sx={{
                  width: {
                    xs: '100%',
                    sm: 200
                  },
                  mt: 1,
                  fontSize: 14,
                  fontWeight: '500',
                  textTransform: 'none',
                  // backgroundColor: '#64c1ff',
                  color: '#fff',
                  '&:hover': {
                    color: '#ddd'
                  }
                }}
              >
                Save
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default NewDepartment
