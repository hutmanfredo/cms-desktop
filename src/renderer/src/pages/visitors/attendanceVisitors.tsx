import { Add, MoreHoriz } from '@mui/icons-material'
import {
  Box,
  Button,
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
import AttendanceEditArrival from '@renderer/components/attendance/AttendanceEditArrival'
import AttendaneNewMember from '@renderer/components/attendance/AttendaneNewMember'
import TopBarWithArrowBack from '@renderer/components/TopBarWithArrowBack'
import TopBarWithSearch from '@renderer/components/TopBarWithSearch'
import { useState } from 'react'
import { useNavigate } from 'react-router'

interface Column {
  id: number
  label: string
  minWidth?: number
  align?: 'right' | 'left' | 'center'
}

const columns: Column[] = [
  { id: 2, label: 'Full name', minWidth: 20, align: 'left' },
  { id: 3, label: 'Type', minWidth: 20, align: 'center' },
  { id: 4, label: 'Level', minWidth: 20, align: 'center' },
  { id: 4, label: 'Program', minWidth: 20, align: 'center' },
  { id: 4, label: 'Phone', minWidth: 20, align: 'center' },
  { id: 6, label: 'Invitor', minWidth: 20, align: 'center' },
  { id: 6, label: 'Arrival', minWidth: 20, align: 'center' },
  { id: 12, label: 'Options', minWidth: 20, align: 'right' }
]

interface Data {
  id: string
  fullname?: string
  type?: string
  level?: number | undefined
  program?: string
  phone?: string
  invitor?: string
  arrival?: string
}

const data: Data[] = [
  {
    id: '1234567890',
    fullname: 'Francis Quartey',
    type: 'worker',
    level: undefined,
    program: '',
    phone: '0542450230',
    invitor: 'Francis',
    arrival: '3:20 PM'
  }
]

function AttendanceVistors(): JSX.Element {
  const navigate = useNavigate()
  const [search, setSearch] = useState<string>('')
  const [openEditArrival, setOpenEditArrival] = useState<boolean>(false)
  const [openNewArrival, setOpenNewArrival] = useState<boolean>(false)

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

  const handleArrival = (): void => {
    handleClose()
    setOpenEditArrival(!openEditArrival)
  }

  const titletxt: string = 'Spiritaul protocol'
  return (
    <>
      <TopBarWithArrowBack onClick={() => navigate(-1)} title={`${titletxt} / Visitors`} />
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Visitor"
          btnTxt="Visitor"
          onClick={() => navigate('newvisitor')}
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
                        {row.fullname}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.type}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.type !== 'student' ? 'N/A' : row.level}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.type !== 'student' ? 'N/A' : row.program}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.phone}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.invitor}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.arrival}
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
              onClick={handleArrival}
            >
              Edit Arrival
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
      <AttendanceEditArrival
        open={openEditArrival}
        handleClose={() => setOpenEditArrival(!openEditArrival)}
      />
      <AttendaneNewMember
        open={openNewArrival}
        handleClose={() => setOpenNewArrival(!openNewArrival)}
      />
    </>
  )
}

export default AttendanceVistors
