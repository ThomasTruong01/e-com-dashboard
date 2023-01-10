import styles from '../../../styles/Sidebar/Nav.module.css'
import Link from 'next/link'

const NavItems = ({ item }) => {
  const active = item.title === 'Dashboard' ? `${styles.active}` : ''
  return (
    <Link href={item.to}>
      <li className={`${styles.nav_items} ${active}`}>
        {item.icon}
        <span>{item.title}</span>
      </li>
    </Link>
  )
}

export default NavItems
