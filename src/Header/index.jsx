import { useState } from 'react'

import Menu from './Menu'
import PhoneMenu from './PhoneMenu'

import styles from './Header.module.css'

const Header = () => {

    let [transparentNavbar, setTransparentNavbar] = useState(false)

    const changeNavbar = () => {
        window.scrollY < 100 ? setTransparentNavbar(false) : setTransparentNavbar(true)
    }

    window.addEventListener('scroll', changeNavbar)

    return (
        <header className={`${styles.header} ${transparentNavbar ? styles.solidHeader : styles.transparentHeader}`}>
            <nav className={styles.headerContainer}>
                <Menu transparentNavbar={transparentNavbar} />
                <PhoneMenu />
            </nav>
        </header>
    )
}

export default Header
