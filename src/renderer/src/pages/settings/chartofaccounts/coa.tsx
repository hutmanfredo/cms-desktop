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
import BranchEdit from '@renderer/components/branch/BranchEdit'
import BranchNew from '@renderer/components/branch/BranchNew'
import CoaEdit from '@renderer/components/settings/coa/CoaEdit'
import CoaNew from '@renderer/components/settings/coa/CoaNew'
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
  { id: 1, label: 'Account Type', minWidth: 10, align: 'left' },
  { id: 6, label: 'Account Name', minWidth: 20, align: 'center' },
  { id: 6, label: 'Main Account', minWidth: 20, align: 'center' },
  { id: 12, label: 'Options', minWidth: 20, align: 'right' }
]

interface Data {
  id: string
  type: string
  name?: string
  main?: string
}

const data: Data[] = [
  {
    id: '1234567890',
    type: 'Current',
    name: 'Offering',
    main: 'Current Asset'
  }
]

function Coa(): JSX.Element {
  const navigate = useNavigate()
  const [search, setSearch] = useState<string>('')
  const [openNew, setOpenNew] = useState<boolean>(false)
  const [openEdit, setOpenEdit] = useState<boolean>(false)
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

  const handleEdit = (): void =>{
    setOpenEdit(!openEdit)
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
          placeholder="Search account"
          btnTxt="Account"
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
                      <TableCell sx={{ fontSize: 12 }}>{row.type}</TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.name}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.main}
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
              Edit account
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
      <CoaNew open={openNew} handleClose={() => setOpenNew(!openNew)} />
      <CoaEdit open={openEdit} handleClose={() => setOpenEdit(!openEdit)} />
    </>
  )
}

export default Coa
