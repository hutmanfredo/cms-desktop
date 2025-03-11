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
  { id: 2, label: 'Full name', minWidth: 20, align: 'left' },
  { id: 3, label: 'Type', minWidth: 20, align: 'center' },
  { id: 4, label: 'Level', minWidth: 20, align: 'center' },
  { id: 4, label: 'Program', minWidth: 20, align: 'center' },
  { id: 4, label: 'Phone', minWidth: 20, align: 'center' },
  { id: 6, label: 'Invitor', minWidth: 20, align: 'center' },
  { id: 6, label: 'Date', minWidth: 20, align: 'center' },
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
  date?: string
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
    date: '30/12/2024'
  }
]


function Visitors(): JSX.Element {
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
              onClick={() => navigate('updatevisitor')}
            >
              Update
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

export default Visitors
