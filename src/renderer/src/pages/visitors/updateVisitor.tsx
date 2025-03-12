import { Box, Button, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import AutoComplete from '@renderer/components/Autocomplete'
import TextInput from '@renderer/components/TextInput'
import TopBarWithArrowBack from '@renderer/components/TopBarWithArrowBack'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

type Value = {
  id: number
  label: string
}

const events: Value[] = [
  {
    id: 12345,
    label: 'Sunday service'
  },
  {
    id: 1234,
    label: 'Monday service'
  }
]
const members: Value[] = [
  {
    id: 12345,
    label: 'Francis Quartey'
  },
  {
    id: 1234,
    label: 'Samuel Quartey'
  }
]

function UpdateVisitor(): JSX.Element {
  const navigate = useNavigate()
  const [event, setEvent] = useState<Value | null>()
  const [member, setMember] = useState<Value | null>()
  const gender = [
    {
      title: 'Male',
      value: 'male'
    },
    {
      title: 'Female',
      value: 'female'
    }
  ]
  const typedata = [
    {
      title: 'Student',
      value: 'student'
    },
    {
      title: 'Graduate',
      value: 'graduate'
    }
  ]

  const handleChangeEvent = (event: any, newValue: Value | any): void => {
    setEvent(newValue)
  }
  const handleChangeMembers = (event: any, newValue: Value | any): void => {
    setMember(newValue)
  }

  return (
    <>
      <TopBarWithArrowBack onClick={() => navigate(-1)} title="Update visitor" />
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
                <TextInput label="Full name" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Gender" select={true} data={gender} placeholder="Select gender"/>
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Type" data={typedata} select={true} placeholder="Select type"/>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Level" type="number" />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Program" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Phone" data={gender} type="tell" />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <AutoComplete
                  label="Invitor"
                  data={members}
                  handleChange={handleChangeMembers}
                  placeholder="Search invitor"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Date" type="date" />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <AutoComplete
                  label="Event/Service"
                  data={events}
                  handleChange={handleChangeEvent}
                  placeholder="Search service"
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
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
                Submit
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default UpdateVisitor
