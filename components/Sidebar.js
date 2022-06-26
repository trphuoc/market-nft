import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/scss/Sidebar.module.scss'

const Sidebar = () => {
    return (
        <ul className={styles.menu}>
            <li className={styles.menu__item}><Link href="/">Home</Link></li>
            <li className={styles.menu__item}><Link href="/">Collections</Link></li>
            <li className={styles.menu__item}><Link href="/">Profile</Link></li>
            <li className={styles.menu__item}><Link href="/">Transaction History</Link></li>
        </ul>
    )
}

export default Sidebar