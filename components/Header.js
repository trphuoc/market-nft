import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/scss/Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container row align-center">
                <div className={styles.logo}>Market NFT ¯\_(ツ)_/¯</div>
                <div className={styles.search}>
                    <input className={styles.search__input} type="search" name="keyword" id="" placeholder="Search"/>
                    {/* <ul className={styles.search__suggestions}>
                        <li><Link href='/'>111</Link></li>
                    </ul> */}
                </div>
                <button className={styles.metamask}> 
                    <Image src="/metamask-fox.svg" width={30} height={30}/>
                    <span className={styles.metamask__text}>Connect Metamask</span>
                </button>
            </div>
        </header>
    )
}

export default Header