import { Fragment, useEffect, useState } from 'react'
import styles from '../../../styles/Sidebar/Nav.module.css'
import NavList from './NavList'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutline'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutline'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutline'
import BarOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieOutlinedIcon from '@mui/icons-material/PieChartOutline'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

const navParams = [
  {
    title: 'Management',
    items: [
      {
        type: 'item',
        title: 'Dashboard',
        to: '/',
        icon: <HomeOutlinedIcon />
      },
      {
        type: 'item',
        title: 'Manage Team',
        to: '/Management/Team',
        icon: <PeopleOutlinedIcon />
      },
      {
        type: 'item',
        title: 'Contacts Information',
        to: '/Management/Contacts',
        icon: <ContactsOutlinedIcon />
      },
      {
        type: 'item',
        title: 'Invoices Balances',
        to: '/Management/Invoices',
        icon: <ReceiptOutlinedIcon />
      }
    ]
  },
  {
    title: 'Pages',
    items: [
      {
        type: 'item',
        title: 'Profile Form',
        to: '/Pages/Form',
        icon: <PersonOutlinedIcon />
      },
      {
        type: 'item',
        title: 'Calendar',
        to: '/Pages/Calendar',
        icon: <CalendarTodayOutlinedIcon />
      },
      {
        type: 'item',
        title: 'FAQ Page',
        to: '/Pages/FAQ',
        icon: <HelpOutlinedIcon />
      }
    ]
  },
  {
    title: 'Charts',
    items: [
      {
        type: 'item',
        title: 'Bar Chart',
        to: '/Charts/Bar',
        icon: <BarOutlinedIcon />
      },
      {
        type: 'item',
        title: 'Pie Chart',
        to: '/Charts/Pie',
        icon: <PieOutlinedIcon />
      },
      {
        type: 'item',
        title: 'Line Chart',
        to: '/Charts/Line',
        icon: <TimelineOutlinedIcon />
      },
      {
        type: 'item',
        title: 'Geography Chart',
        to: '/Charts/Geography',
        icon: <MapOutlinedIcon />
      }
    ]
  }
]



const Nav = ({ Expand }) => {
  const [active, setActive] = useState('Dashboard')

  const addEventListener = () => {
    const navItems = document.querySelectorAll(`.${styles.nav_items}`)
  
    navItems.forEach(navItem => {
      navItem.addEventListener('click', () => {
        const title = 'Dashboard';
        
        navItems.forEach(navItem => {
          navItem.classList.remove(`${styles.active}`)
        })
        navItem.classList.add(`${styles.active}`)
      })
    })
  }

  useEffect(() => {
    addEventListener()
  }, [])

  return (
    <nav className={styles.nav} aria-expanded={Expand}>
      {navParams.map((item, idx) => {
        return (
          <Fragment key={idx}>
            <NavList navParam={item} active={active} setAtive={setActive} />
            {idx + 1 !== navParams.length ? <hr /> : null}
          </Fragment>
        )
      })}
    </nav>
  )
}

export default Nav
