import styles from '../../../styles/Sidebar/Nav.module.css'
import NavItems from './NavItems'

const NavList = ({ navParam, active, setActive }) => {
  const navItems = navParam.items

  return (
    <>
      <div className={styles.nav_title}>{navParam.title}</div>
      <ul className={styles.list}>
        {navItems.map((item, idx) => {
          return <NavItems key={idx} item={item} active={active} setActive={setActive} />
        })}
      </ul>
    </>
  )
}

export default NavList
