import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Outlet, useNavigate } from 'react-router'
import {
  AccountTree,
  AcUnit,
  Assessment,
  AttachMoney,
  BarChart,
  Book,
  Build,
  ChevronRight,
  Dashboard,
  Diversity2,
  Event,
  ExpandMore,
  Groups,
  Money,
  Payments,
  PeopleAlt,
  Person,
  Person2,
  Settings,
  Snowshoeing,
  VolunteerActivism
} from '@mui/icons-material'
import { Button } from '@mui/material'
import useGlobalContext from './context/context'

const drawerWidth = 200

interface Props {
  window?: () => Window
}
const navigation = [
  { name: 'Dashboard', href: '', icon: <Dashboard fontSize="small" /> },
  { name: 'Members', href: 'members', icon: <PeopleAlt fontSize="small" /> },
  { name: 'Zones', href: 'zones', icon: <AccountTree fontSize="small" /> },
  { name: 'Cells', href: 'cells', icon: <AcUnit fontSize="small" /> },
  { name: 'Departments', href: 'departments', icon: <Groups fontSize="small" /> },
  { name: 'Attendance', href: 'attendance', icon: <Snowshoeing fontSize="small" /> },
  { name: 'Visitors', href: 'visitors', icon: <Person fontSize="small" /> },
  {
    name: 'Finance',
    href: 'finance',
    icon: <AttachMoney fontSize="small" />,
    sub: [
      {
        name: 'Income',
        href: 'finance/income',
        icon: <Money fontSize="small" />
      },
      {
        name: 'Contributions',
        href: 'finance/contributions',
        icon: <VolunteerActivism fontSize="small" />
      },
      {
        name: 'Expenses',
        href: 'finance/expenses',
        icon: <Payments fontSize="small" />
      },
      {
        name: 'Journal',
        href: 'finance/journal',
        icon: <Book fontSize="small" />
      },
      {
        name: 'Projects',
        href: 'finance/projects',
        icon: <Build fontSize="small" />
      }
    ]
  },
  { name: 'Reports', href: 'reports', icon: <Assessment fontSize="small" /> },
  {
    name: 'Settings',
    href: 'settings',
    icon: <Settings fontSize="small" />,
    sub: [
      {
        name: 'Branches',
        href: 'branches',
        icon: <Diversity2 fontSize="small" />
      },
      {
        name: 'Events',
        href: 'events',
        icon: <Event fontSize="small" />
      },
      {
        name: 'Users',
        href: 'users',
        icon: <Person fontSize="small" />
      },
      {
        name: 'Chart of Account',
        href: 'chartofaccount',
        icon: <BarChart fontSize="small" />
      }
    ]
  }
]
export default function ResponsiveDrawer(props: Props): JSX.Element {
  const navigate = useNavigate()
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleDrawerClose = (): void => {
    setIsClosing(true)
    setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = (): void => {
    setIsClosing(false)
  }

  const handleDrawerToggle = (): void => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen)
    }
  }

  const handleNavigation = (item: any, index: number): void => {
    if (!item.sub) {
      navigate(item.href)
    } else {
      setExpandedIndex(expandedIndex === index ? null : index)
    }
  }

  const drawer = (
    <div>
      <Toolbar variant="dense">
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: 23,
              fontWeight: '700',
              color: '#6A6D70',
              fontStyle: 'normal',
              letterSpacing: 2
            }}
          >
            Church-MS
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List disablePadding>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', padding: 1 }}>
          {navigation.map((item, i) => (
            <>
              <Button
                key={i}
                onClick={() => handleNavigation(item, i)}
                startIcon={item.icon}
                variant="contained"
                disableElevation
                sx={{
                  position: 'relative',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  gap: 1,
                  fontSize: 13,
                  fontWeight: '500',
                  textTransform: 'none',
                  backgroundColor: 'transparent',
                  //borderRadius: 'none'
                  color: '#6A6D70'
                }}
              >
                {item.name}
                {item.sub &&
                  (expandedIndex === i ? (
                    <ExpandMore
                      fontSize="small"
                      sx={{ color: '#6A6D70', position: 'absolute', right: 10, zIndex: 1 }}
                    />
                  ) : (
                    <ChevronRight
                      fontSize="small"
                      sx={{ color: '#6A6D70', position: 'absolute', right: 10, zIndex: 1 }}
                    />
                  ))}
              </Button>
              {item.sub && (
                <Box
                  sx={{
                    display: expandedIndex === i ? '' : 'none',
                    width: '100%'
                  }}
                >
                  {item.sub.map((item, i) => (
                    <Button
                      key={i}
                      onClick={() => {
                        navigate(item.href)
                      }}
                      startIcon={item.icon}
                      size="small"
                      variant="contained"
                      disableElevation
                      sx={{
                        position: 'relative',
                        width: '100%',
                        paddingX: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'start',
                        gap: 1,
                        fontSize: 12,
                        fontWeight: '500',
                        textTransform: 'none',
                        backgroundColor: 'transparent',
                        //borderRadius: 'none'
                        color: '#6A6D70'
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                  <Divider />
                </Box>
              )}
            </>
          ))}
        </ListItem>
      </List>
      {/* <Box sx={{ width: '100%', overflow: 'auto', display: 'flex', flexDirection: 'column' }}></Box> */}
    </div>
  )

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? (): HTMLElement => window().document.body : undefined

  return (
    <Box
      sx={{
        width: '100%',
        height: '100dvh',
        display: 'flex',
        overflow: 'hidden',
        boxSizing: 'border-box',
        userSelect: 'none'
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: 'transparent',
          borderBottom: '0.5px solid #eee'
        }}
        elevation={0}
      >
        <Toolbar
          variant="dense"
          sx={{
            flex: 1,
            position: 'relative'
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ position: 'absolute', right: 20 }}>
            <Typography
              variant="inherit"
              noWrap
              color="textPrimary"
              sx={{
                fontSize: 14
              }}
            >
              Francis
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          height: 'calc(100% - 48px)',
          // height: '100dvh',
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          boxSizing: 'border-box'
        }}
      >
        <Toolbar variant="dense" />
        <Box
          sx={{
            // width: '100%',
            height: '100%'
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
