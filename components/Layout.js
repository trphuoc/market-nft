import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from '../styles/scss/Layout.module.scss'
import clsx from 'clsx'
import { useCallback, useState, memo } from 'react'

const Layout = ({children}) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const clsxPage = clsx(styles.page, {
        [styles.show]: toggleSidebar
    })

    const handleToggle = useCallback(() => {
            setToggleSidebar(!toggleSidebar);
    }, [toggleSidebar])

    return (
        <div className={clsxPage}>
            <div className={styles.page__left}>
                <button onClick={handleToggle} className={styles.page__toggle}>
                    <span>{'>>'}</span>
                    <span>{'<<'}</span>
                </button>
                <Sidebar></Sidebar>
            </div>
            <div className={styles.page__right}>
                <Header></Header>
                <main className={`${styles.page__content} container`}>{children}</main>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default memo(Layout)