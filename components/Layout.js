import React, { useState } from 'react'
import { Box, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useMemo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { themeSettings } from '../data/theme'
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'
import Sidebar from './Sidebar'
import { useRouter } from 'next/router'


const Layout = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState()
  const mode = useSelector(state => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const isNonMobile = useMediaQuery('(min-width: 600px')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const router = useRouter()
  const userId = useSelector(state => state.global.userId);

  useEffect(() => {
    setLoading(true)
    fetch(`/api/users?id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data)
        setLoading(false)
      })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
        <Sidebar
          isNonMobile={isNonMobile}
          drawerWidth='250px'
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          router={router}
          user={user}
        />
        <Box flexGrow={1}>
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            display='block'
            user={user}
          />
          <div className={styles.Main}>{React.cloneElement(children, {router: router})}</div>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Layout
