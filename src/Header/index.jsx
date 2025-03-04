import { useState } from 'react'

import Menu from './Menu'
import PhoneMenu from './PhoneMenu'

import styles from './Header.module.css'

const Header = () => {

    const [solidNavbar, setSolidNavbar] = useState(false)

    const changeNavbar = () => {

        if (window.scrollY < 100 || window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setSolidNavbar(false)
        } else {
            setSolidNavbar(true)
        }
    }

    window.addEventListener('scroll', changeNavbar)

    return (
        <header className={`${styles.header} ${solidNavbar ? styles.solidHeader : styles.transparentHeader}`}>
            <nav className={styles.headerContainer}>
                <Menu solidNavbar={solidNavbar} />
                <PhoneMenu />
            </nav>
        </header>
    )
}

export default Header
