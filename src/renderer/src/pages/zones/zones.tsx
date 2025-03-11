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
  { id: 1, label: 'Zone', minWidth: 10, align: 'left' },
  { id: 2, label: 'Minister', minWidth: 20, align: 'center' },
  { id: 3, label: 'Assistant', minWidth: 20, align: 'center' },
  { id: 4, label: 'Members', minWidth: 20, align: 'center' },
  { id: 5, label: 'Cells', minWidth: 20, align: 'center' },
  { id: 6, label: 'Location', minWidth: 20, align: 'center' },
  { id: 6, label: 'Phone', minWidth: 20, align: 'center' },
  { id: 12, label: 'Options', minWidth: 20, align: 'right' }
]

interface Data {
  id: string
  zone: string
  minister?: string
  assistant?: string
  members?: number
  cells?: number
  location?: string
  phone?: string
}

const data: Data[] = [
  {
    id: '1234567890',
    zone: 'Zone 1',
    minister: 'Francis Quartey',
    assistant: 'Issac Quartey',
    members: 20,
    cells: 3,
    location: 'Kotei',
    phone: '0542450230'
  }
]

function Zones(): JSX.Element {
  const navigate = useNavigate()
  const [search, setSearch] = useState<string>('')

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

  return (
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
        placeholder="Search Zone"
        btnTxt="Zone"
        onClick={() => navigate('newzone')}
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
                    <TableCell sx={{ fontSize: 12 }}>{row.zone}</TableCell>
                    <TableCell sx={{ fontSize: 12 }} align="center">
                      {row.minister}
                    </TableCell>
                    <TableCell sx={{ fontSize: 12 }} align="center">
                      {row.assistant}
                    </TableCell>
                    <TableCell sx={{ fontSize: 12 }} align="center">
                      {row.members}
                    </TableCell>
                    <TableCell sx={{ fontSize: 12 }} align="center">
                      {row.cells}
                    </TableCell>
                    <TableCell sx={{ fontSize: 12 }} align="center">
                      {row.location}
                    </TableCell>
                    <TableCell sx={{ fontSize: 12 }} align="center">
                      {row.phone}
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
            onClick={() => navigate('zonemembers')}
          >
            Members
          </MenuItem>
          <MenuItem
            sx={{
              margin: 0.3,
              borderRadius: 0.9,
              fontSize: 12
            }}
            onClick={() => navigate('updatezone')}
          >
            Edit zone
          </MenuItem>
          <MenuItem
            sx={{
              margin: 0.3,
              borderRadius: 0.9,
              fontSize: 12
            }}
            // onClick={() => setLoadingPro(true)}
          >
            Archive
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

export default Zones
