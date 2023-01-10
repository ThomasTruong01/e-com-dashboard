import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material'
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutline
} from '@mui/icons-material'
import { useEffect, useState } from 'react'
import FlexBetween from './FlexBetween'
import ProfilePicture from '../public/assets/user.jpeg'
import Link from 'next/link'

const navItems = [
  {
    text: 'Dashboard',
    icon: <HomeOutlined />
  },
  {
    text: 'Client Facing',
    icon: null
  },
  {
    text: 'Products',
    icon: <ShoppingCartOutlined />,
    to: '/'
  },
  {
    text: 'Customers',
    icon: <Groups2Outlined />,
    to: '/'
  },
  {
    text: 'Transactions',
    icon: <ReceiptLongOutlined />,
    to: '/'
  },
  {
    text: 'Geography',
    icon: <PublicOutlined />,
    to: '/'
  },
  {
    text: 'Sales',
    icon: null,
    to: '/'
  },
  {
    text: 'Overview',
    icon: <PointOfSaleOutlined />,
    to: '/'
  },
  {
    text: 'Daily',
    icon: <TodayOutlined />,
    to: '/'
  },
  {
    text: 'Monthly',
    icon: <CalendarMonthOutlined />,
    to: '/'
  },
  {
    text: 'Breakdown',
    icon: <PieChartOutline />,
    to: '/'
  },
  {
    text: 'Managment',
    icon: null,
    to: '/'
  },
  {
    text: 'Admin',
    icon: <AdminPanelSettingsOutlined />,
    to: '/'
  },
  {
    text: 'Performance',
    icon: <TrendingUpOutlined />,
    to: '/'
  }
]
const Sidebar = ({
  isNonMobile,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  router,
  user
}) => {
  const pathName = router.pathname
  const [active, setActive] = useState()
  const theme = useTheme()

  useEffect(() => {
    const path =
      pathName.substring(1) === '/' ? 'dashboard' : pathName.substring(1)
    setActive(pathName.substring(1))
  }, [])

  return (
    <Box component='nav'>
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant='persistent'
          anchor='left'
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.primary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth
            }
          }}
        >
          <Box width='100%'>
            <Box m='1.5rem 2rem 2rem 3rem'>
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display='flex' alignItems='center' gap='0.5rem'>
                  <Typography variant='h4' fontWeight='bold'>
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon, to }, idx) => {
                if (!icon) {
                  return (
                    <Typography key={idx} sx={{ m: '2.25rem 0 1rem 3rem' }}>
                      {text}
                    </Typography>
                  )
                }
                const lcText = text.toLowerCase()
                return (
                  <ListItem key={idx} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        router.push(`/${lcText}`)
                        setActive(lcText)
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : 'transparent',
                        color:
                          active == lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100]
                      }}
                    >
                      <ListItemIcon
                        sx={{ ml: '2rem' }}
                        color={
                          active == lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[200]
                        }
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: 'auto' }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Box>
          {user && (
            <Box
              position='fixed'
              bottom='0'
              width={drawerWidth}
              sx={{ backgroundColor: theme.palette.background.alt }}
            >
              <Divider />
              <FlexBetween
                textTransform='none'
                gap='1rem'
                m='1.5rem 2rem 0 3rem'
              >
                <Box
                  component='img'
                  alt='profile image'
                  src='./assets/user.jpeg'
                  height='40px'
                  width='40px'
                  borderRadius='50%'
                  sx={{ objectFit: 'cover' }}
                />
                <Box textAlign='left'>
                  <Typography
                    fontWeight='bold'
                    fontSize='0.9rem'
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    fontSize='0.8rem'
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user.occupation}
                  </Typography>
                </Box>
                <SettingsOutlined
                  sx={{ color: theme.palette.secondary[500], fontSize: '25px' }}
                />
              </FlexBetween>
            </Box>
          )}
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar
