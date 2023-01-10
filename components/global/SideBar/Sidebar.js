import styles from '../../../styles/Sidebar/SideBar.module.css'
import SideBarLogo from './SideBarLogo'
import Nav from './Nav'
import Arrow from './Arrow'
import { useState } from 'react'

const SideBar = () => {
    const [Expand, setExpand] = useState(false)
    return (
        <div className={styles.sidebar} aria-expanded={Expand}>
            <SideBarLogo Expand={Expand} />
            <Arrow Expand={Expand} setExpand={setExpand} />
            <Nav Expand={Expand} />
        </div>
    )
}

export default SideBar