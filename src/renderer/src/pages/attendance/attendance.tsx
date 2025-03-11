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
import EventNew from '@renderer/components/events/EventNew'
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
  { id: 1, label: 'Event title', minWidth: 10, align: 'left' },
  { id: 2, label: 'Date', minWidth: 20, align: 'center' },
  { id: 3, label: 'Time', minWidth: 20, align: 'center' },
  { id: 4, label: 'Members', minWidth: 20, align: 'center' },
  { id: 5, label: 'Visitors', minWidth: 20, align: 'center' },
  { id: 6, label: 'Total', minWidth: 20, align: 'center' },
  { id: 12, label: 'Options', minWidth: 20, align: 'right' }
]

interface Data {
  id: string
  event: string
  date?: string
  time?: string
  members?: number
  visitors?: number
  total?: number
}

const data: Data[] = [
  {
    id: '1234567890',
    event: 'Spiritual Protocol',
    date: '30/01/2025',
    time: '3:00 PM',
    members: 30,
    visitors: 10,
    total: 40
  }
]

function Attendance(): JSX.Element {
  const navigate = useNavigate()
  const [openNewEvent, setOpenNewEvent] = useState<boolean>(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [search, setSearch] = useState<string>('')

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

  const handleTransfer = (): void => {
    handleClose()
  }

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Attendance"
          btnTxt="Event"
          onClick={() => setOpenNewEvent(!openNewEvent)}
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
                      <TableCell sx={{ fontSize: 12 }}>{row.event}</TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.date}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.time}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.members}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.visitors}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.total}
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
              dense={true}
              sx={{
                margin: 0.3,
                borderRadius: 0.9,
                fontSize: 12
              }}
              onClick={() => navigate('attendancemembers')}
            >
              Members
            </MenuItem>
            <MenuItem
              sx={{
                margin: 0.3,
                borderRadius: 0.9,
                fontSize: 12
              }}
              onClick={() => navigate('attendancevistors')}
            >
              Vistors
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
      <EventNew open={openNewEvent} handleClose={() => setOpenNewEvent(!openNewEvent)} />
    </>
  )
}

export default Attendance
