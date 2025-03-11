import { MoreHoriz } from '@mui/icons-material'
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material'
import NewExpense from '@renderer/components/finance/expense/NewExpense'
import UpdateExpense from '@renderer/components/finance/expense/UpdateExpense'
import TopBarWithSearch from '@renderer/components/TopBarWithSearch'
import useGlobalContext from '@renderer/context/context'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

interface Column {
  id: number
  label: string
  minWidth?: number
  align?: 'right' | 'left' | 'center'
}

const columns: Column[] = [
  { id: 5, label: 'Amount (GH¢)', minWidth: 20, align: 'left' },
  { id: 6, label: 'Reason/Purpose', minWidth: 20, align: 'center' },
  { id: 4, label: 'Payment mode', minWidth: 20, align: 'center' },
  { id: 1, label: 'Date', minWidth: 10, align: 'center' },
  { id: 12, label: 'Options', minWidth: 20, align: 'right' }
]

interface Data {
  id: string
  date: string
  reason?: string
  mode?: string
  amount?: number
}

const data: Data[] = [
  {
    id: '1234567890',
    reason: 'Sunday service',
    mode: 'Cash',
    amount: 300,
    date: '30/01/2001'
  }
]

function Expenses(): JSX.Element {
  const { setHeaderSubTitle } = useGlobalContext()
  const navigate = useNavigate()
  // const [search, setSearch] = useState<string>('none')
  const [openNew, setOpenNew] = useState<boolean>(false)
  const [openEdit, setOpenEdit] = useState<boolean>(false)
  const [incomeType, setIncomeType] = useState<string>('')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  // Menu state and functions
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleMenuClick = (event: any): void => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const handleEdit = (): void => {
    setOpenEdit(!openEdit)
    handleClose()
  }

  useEffect(() => {
    setHeaderSubTitle('Expenses')
  }, [])

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}
      >
        <TopBarWithSearch
          filtervalue={incomeType}
          itype="dateselect"
          filter="no"
          filterChange={(e) => setIncomeType(e.target.value)}
          placeholder="Fliter by"
          btnTxt="Expense"
          onClick={() => setOpenNew(!openNew)}
        />

        <Box sx={{ width: '100%', mt: 1, overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: '90%' }}>
            <Table size="small" stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, i) => (
                    <TableCell
                      sx={{ fontSize: 12 }}
                      key={i}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      <TableCell sx={{ fontSize: 12 }} align="left">
                        {row.amount}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.reason}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.mode}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.date}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          size="small"
                          id="menubutton"
                          aria-controls={open ? 'menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={(e) => handleMenuClick(e)}
                        >
                          <MoreHoriz fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />

          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'menubutton',
              disablePadding: true,
              dense: true
            }}
            variant="menu"
            sx={{
              fontSize: 10
            }}
          >
            <MenuItem
              sx={{
                margin: 0.3,
                borderRadius: 0.9,
                fontSize: 12
              }}
              onClick={handleEdit}
            >
              Edit expense
            </MenuItem>
            <MenuItem
              sx={{
                margin: 0.3,
                borderRadius: 0.9,
                fontSize: 12
              }}
              // onClick={() => setLoadingPro(true)}
            >
              Remove
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <NewExpense open={openNew} handleClose={() => setOpenNew(!openNew)} />
      <UpdateExpense open={openEdit} handleClose={() => setOpenEdit(!openEdit)} />
    </>
  )
}

export default Expenses
