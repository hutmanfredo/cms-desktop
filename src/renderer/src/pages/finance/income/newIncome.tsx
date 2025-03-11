import { Box, Button, Stack } from '@mui/material'
import Grid from '@mui/material/Grid2'
import IncomeOffering from '@renderer/components/finance/IncomeOffering'
import IncomeTitheSeed from '@renderer/components/finance/IncomeTitheSeed'
import TextInput from '@renderer/components/TextInput'
import TopBarWithArrowBack from '@renderer/components/TopBarWithArrowBack'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

type Value = {
  id: number
  label: string
}

const members: Value[] = [
  { id: 1, label: 'Francis Quartey' },
  { id: 2, label: 'Samuel Quartey' },
  { id: 3, label: 'David Quartey' },
  { id: 4, label: 'Isaac Quartey' },
  { id: 5, label: 'Albert Quartey' }
]

const service: Value[] = [
  { id: 1, label: 'Sunday service' },
  { id: 2, label: 'Monday service' }
]

function NewIncome(): JSX.Element {
  const [incomeType, setIncomeType] = useState<string>('')
  const [tsValue, setTSValue] = useState<Value | null>()
  const [offeringValue, setOfferingValue] = useState<Value | null>()
  const [openIncomeTypeOffering, setOpenIncomeTypeOffering] = useState<boolean>(false)
  const [openIncomeTypeTS, setOpenIncomeTypeTS] = useState<boolean>(false)
  const navigate = useNavigate()

  const incometype = [
    {
      title: 'Offering',
      value: 'offering'
    },
    {
      title: 'Tithe',
      value: 'tithe'
    },
    {
      title: 'Seed',
      value: 'seed'
    }
  ]

  const paymenttype = [
    {
      title: 'Cash',
      value: 'cash'
    },
    {
      title: 'MoMo',
      value: 'momo'
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      if (incomeType !== '' && incomeType === 'offering') {
        setOpenIncomeTypeOffering(true)
        setOpenIncomeTypeTS(false)
      } else if (incomeType !== '' && (incomeType === 'tithe' || incomeType === 'seed')) {
        setOpenIncomeTypeTS(true)
        setOpenIncomeTypeOffering(false)
      }
    }, 10)
  }, [incomeType])

  const handleTSChange = (event: any, newValue: Value | any): void => {
    setTSValue(newValue)
  }

  const handleTSClick = (): void => {
    setOpenIncomeTypeTS(!openIncomeTypeTS)
  }

  const handleOfferingChange = (event: any, newValue: Value | any): void => {
    setOfferingValue(newValue)
  }

  const handleOfferingClick = (): void => {
    setOpenIncomeTypeOffering(!openIncomeTypeOffering)
  }

  return (
    <>
      <TopBarWithArrowBack onClick={() => navigate(-1)} title="New Income" />
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
                <TextInput label="Date" type="date" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput
                  label="Income type"
                  select={true}
                  data={incometype}
                  value={incomeType}
                  onChange={(e) => setIncomeType(e.target.value)}
                  defaultValue="none"
                  placeholder="Select income type"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Discription" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput
                  label="Payment type"
                  data={paymenttype}
                  select={true}
                  defaultValue="none"
                  placeholder="Select payment type"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} size="grow">
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput label="Amount" type="number" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TextInput
                  label="Recieved from"
                  readOnly={true}
                  value={incomeType === 'offering' ? offeringValue?.label : tsValue?.label}
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
      <IncomeOffering
        open={openIncomeTypeOffering}
        handleChange={handleOfferingChange}
        data={service}
        onClick={handleOfferingClick}
        handleClose={() => setOpenIncomeTypeOffering(!openIncomeTypeOffering)}
      />
      <IncomeTitheSeed
        handleChange={handleTSChange}
        data={members}
        onClick={handleTSClick}
        open={openIncomeTypeTS}
        handleClose={() => setOpenIncomeTypeTS(!openIncomeTypeTS)}
      />
    </>
  )
}

export default NewIncome
