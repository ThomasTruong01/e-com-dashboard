import styles from '../../../styles/Sidebar/Arrow.module.css'
import { useEffect, useState } from 'react';

const Hamburger = ({Expand, setExpand}) => {

  const handleClick = () => {
    setExpand(!Expand)
  }

  return (
    <button className={styles.nav__button} aria-controls="primary-navigation" aria-expanded={Expand} onClick={handleClick}>
      <svg stroke="var(--button-color)" fill="none" className={styles.hamburger} viewBox="0 0 100 100" width="35">
        <path className={styles.line}
          d='m 50 0 a 0 0 0 0 0 40 40 a 0 0 0 0 0 -40 40 v -80 a 0 0 0 0 0 -40 40 a 0 0 1 0 0 41 41'
          strokeWidth='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
        </path>
      </svg>
    </button>
  )
}

export default Hamburger
