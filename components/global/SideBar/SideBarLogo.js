import styles from '../../../styles/Sidebar/SideBarLogo.module.css'

const Logo = ({ Expand }) => {
    return (
        <div className={styles.logo} aria-expanded={Expand}>
            <svg stroke="var(--button-color)" fill="#5a5a5a50" className={styles.logo} viewBox="-20 -20 135 135" width="35">
                <path d='M -10 50 A 1 1 0 0 0 110 50 A 1 1 0 0 0 -10 50'
                    className={styles.circle1}
                    strokeWidth='10'
                    strokeLinecap='round'
                    strokeLinejoin='round' />
                <path d='M -10 50 A 1 1 0 0 0 110 50 A 1 1 0 0 0 -10 50'
                    className={styles.circle2}
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round' />
                <path d='M 50 25 h -30 a 1 1 0 0 0 0 10 h 30 a 0 0 0 0 0 10 -10 h 30 a 1 1 0 1 1 0 10 h -30 v 60 a 1 1 0 0 1 -10 0 v -50'
                    className={styles.line1}
                    strokeWidth='8'
                    strokeLinecap='round'
                    strokeLinejoin='round' />
                <path d='M 50 25 h -30 a 1 1 0 0 0 0 10 h 30 a 0 0 0 0 0 10 -10 h 30 a 1 1 0 1 1 0 10 h -30 v 60 a 1 1 0 0 1 -10 0 v -50'
                    className={styles.line2}
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round' />

            </svg>
            <h3>Thomas Truong</h3>
        </div>
    )
}

export default Logo
