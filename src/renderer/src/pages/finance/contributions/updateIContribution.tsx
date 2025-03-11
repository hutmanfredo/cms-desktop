import { Box, Button, Stack } from '@mui/material'
import Grid from '@mui/material/Grid2'
import TextInput from '@renderer/components/TextInput'
import TopBarWithArrowBack from '@renderer/components/TopBarWithArrowBack'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function UpdateContribution(): JSX.Element {
  const [project, setProject] = useState<string>('')
  const [contributor, setContributor] = useState<string>('')
  const [paymentType, setPaymentType] = useState<string>('')
  const navigate = useNavigate()
  const projectData = [
    {
      title: 'Instrument',
      value: 'Instrument'
    },
    {
      title: 'Combo',
      value: 'Combo'
    },
    {
      title: 'Rent',
      value: 'Rent'
    }
  ]
  const contributorData = [
    {
      title: 'Francis Quartey',
      value: 'Francis Quartey'
    },
    {
      title: 'Samuel Quartey',
      value: 'Samuel Quartey'
    }
  ]
  const paymentTypeData = [
    {
      title: 'Cash',
      value: 'cash'
    },
    {
      title: 'MoMo',
      value: 'momo'
    }
  ]

  return (
    <>
      <TopBarWithArrowBack onClick={() => navigate(-1)} title="Edit Contributor" />
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
                <TextInput
                  label="Project"
                  select={true}
                  data={projectData}
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  defaultValue="none"
                  placeholder="Select project"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput
                  label="Contributor"
                  select={true}
                  data={contributorData}
                  value={contributor}
                  onChange={(e) => setContributor(e.target.value)}
                  defaultValue="none"
                  placeholder="Select contributor"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Amount" type="number" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput
                  label="Payment Mode"
                  data={paymentTypeData}
                  value={paymentType}
                  select={true}
                  onChange={(e) => setPaymentType(e.target.value)}
                  defaultValue="none"
                  placeholder="Select payment type"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Date" type="date" />
              </Grid>
              {/* <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Recieved from" readOnly={true} value={ContributionType} />
              </Grid> */}
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

export default UpdateContribution
