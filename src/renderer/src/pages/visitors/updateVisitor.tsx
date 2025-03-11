import { Box, Button, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import TextInput from '@renderer/components/TextInput'
import TopBarWithArrowBack from '@renderer/components/TopBarWithArrowBack'
import React from 'react'
import { useNavigate } from 'react-router'

function UpdateVisitor(): JSX.Element {
  const navigate = useNavigate()
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
  const branchdata = [
    {
      title: 'Knust',
      value: '123456'
    },
    {
      title: 'Legon',
      value: '12323454'
    }
  ]

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
                <TextInput label="Gender" select={true} data={gender} />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Type" data={typedata} select={true} />
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
                <TextInput label="Invitor" data={typedata} select={true} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Date" type="date" />
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
                Save
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default UpdateVisitor
