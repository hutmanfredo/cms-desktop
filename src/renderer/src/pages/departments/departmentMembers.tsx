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
import DepartmentNewMember from '@renderer/components/department/DepartmentNewMember'
import DepartmentTransfer from '@renderer/components/department/DepartmentTransfer'
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
  { id: 2, label: 'First name', minWidth: 20, align: 'center' },
  { id: 3, label: 'Given names', minWidth: 20, align: 'center' },
  { id: 4, label: 'Gender', minWidth: 20, align: 'center' },
  { id: 6, label: 'Phone', minWidth: 20, align: 'center' },
 
  { id: 12, label: 'Options', minWidth: 20, align: 'right' }
]

interface Data {
  id: string
  firstname?: string
  givennames?: string
  gender?: string
  phone?: string
 
}

const data: Data[] = [
  {
    id: '1234567890',
    firstname: 'Francis',
    givennames: 'Quartey',
    gender: 'Male',
    phone: '0542450230',
  }
]

function DepartmentMembers(): JSX.Element {
  const navigate = useNavigate()
  const [search, setSearch] = useState<string>('')
  const [openNewMember, setOpenNewMember] = useState<boolean>(false)
  const [openTransfer, setOpenTransfer] = useState<boolean>(false)

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

  const handleTransfer = (): void => {
    setOpenTransfer(!openTransfer)
    handleClose()
  }

  const titletxt: string = 'Media'
  return (
    <>
      <TopBarWithArrowBack onClick={() => navigate(-1)} title={`${titletxt} Members`} />
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
          placeholder="Search Member"
          btnTxt="Member"
          onClick={() => setOpenNewMember(!openNewMember)}
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
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.firstname}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.givennames}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.gender}
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
              onClick={handleTransfer}
            >
              Transfer
            </MenuItem>
            <MenuItem
              sx={{
                margin: 0.3,
                borderRadius: 0.9,
                fontSize: 12
              }}
              // onClick={() => setLoadingPro(true)}
            >
              Flag Inactive
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
      <DepartmentNewMember
        open={openNewMember}
        handleClose={() => setOpenNewMember(!openNewMember)}
      />
      <DepartmentTransfer open={openTransfer} handleClose={() => setOpenTransfer(!openTransfer)} />
    </>
  )
}

export default DepartmentMembers
