import { Box, Button, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import TextInput from '@renderer/components/TextInput'
import TopBarWithArrowBack from '@renderer/components/TopBarWithArrowBack'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function MemberDetail(): JSX.Element {
  const navigate = useNavigate()
  const [readOnly, setReadOnly] = useState(true)

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
      <TopBarWithArrowBack onClick={() => navigate(-1)} title="Details" />
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
                <TextInput readOnly={readOnly} label="First name" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput readOnly={readOnly} label="Given names" />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput readOnly={readOnly} label="Gender" select={true} data={gender} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput readOnly={readOnly} label="Date of birth" type="date" />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput readOnly={readOnly} label="Phone" data={gender} type="tell" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput readOnly={readOnly} label="Email" type="email" />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput readOnly={readOnly} label="Type" data={typedata} select={true} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput readOnly={readOnly} label="Program" />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput readOnly={readOnly} label="Level" type="number" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput readOnly={readOnly} label="Residence" />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput readOnly={readOnly} label="Branch" select={true} data={branchdata} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput readOnly={readOnly} label="Member ID" />
              </Grid>
            </Grid>
            {readOnly ? (
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => setReadOnly(!readOnly)}
                  fullWidth={true}
                  size="small"
                  disableElevation
                  disableRipple
                  disableTouchRipple
                  sx={{
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
                  Edit
                </Button>
                <Button
                  variant="contained"
                  fullWidth={true}
                  size="small"
                  disableElevation
                  disableRipple
                  disableTouchRipple
                  sx={{
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
                  Flag as Inactive
                </Button>
               
              </Box>
            ) : (
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Button
                  onClick={() => setReadOnly(!readOnly)}
                  variant="outlined"
                  fullWidth={true}
                  size="small"
                  disableElevation
                  disableRipple
                  disableTouchRipple
                  sx={{
                    
                    mt: 1,
                    fontSize: 14,
                    fontWeight: '500',
                    textTransform: 'none',
                    // backgroundColor: '#64c1ff',
                    color: '#000',
                    '&:hover': {
                      color: '#000'
                    }
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  fullWidth={true}
                  size="small"
                  disableElevation
                  disableRipple
                  disableTouchRipple
                  sx={{
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
            )}
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default MemberDetail
