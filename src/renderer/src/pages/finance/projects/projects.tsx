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
import BranchEdit from '@renderer/components/branch/BranchEdit'
import BranchNew from '@renderer/components/branch/BranchNew'
import NewProject from '@renderer/components/finance/project/NewProject'
import UpdateProject from '@renderer/components/finance/project/UpdateProject'
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
  { id: 1, label: 'Project', minWidth: 10, align: 'left' },
  { id: 6, label: 'Amount', minWidth: 20, align: 'center' },
  { id: 6, label: 'Quota', minWidth: 20, align: 'center' },
  { id: 6, label: 'Contributions', minWidth: 20, align: 'center' },
  { id: 6, label: 'Contributors', minWidth: 20, align: 'center' },
  { id: 6, label: 'Start date', minWidth: 20, align: 'center' },
  { id: 6, label: 'End date', minWidth: 20, align: 'center' },
  { id: 12, label: 'Options', minWidth: 20, align: 'right' }
]

interface Data {
  id: string
  project: string
  amount?: number
  quota?: number
  contributions?: number
  contributors?: number
  sdate?: string
  edate?: string
}

const data: Data[] = [
  {
    id: '1234567890',
    project: 'Purchase of instrument',
    amount: 7000,
    quota: 105,
    contributions: 6000,
    contributors: 100,
    sdate: '12/01/2025',
    edate: '12/01/2025'
  }
]

function Projects(): JSX.Element {
  const { setHeaderSubTitle } = useGlobalContext()
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

  const handleEdit = (): void => {
    setOpenEdit(!openEdit)
    handleClose()
  }

  useEffect(() => {
    setHeaderSubTitle('Projects')
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search project"
          btnTxt="Project"
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
                      <TableCell sx={{ fontSize: 12 }}>{row.project}</TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.amount}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.quota}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.contributions}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.contributors}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.sdate}
                      </TableCell>
                      <TableCell sx={{ fontSize: 12 }} align="center">
                        {row.edate}
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
              Edit project
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
      <NewProject open={openNew} handleClose={() => setOpenNew(!openNew)} />
      <UpdateProject open={openEdit} handleClose={() => setOpenEdit(!openEdit)} />
    </>
  )
}

export default Projects
