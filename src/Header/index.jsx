import { useState } from 'react'
import styles from './Header.module.css'
import Menu from './Menu'
import PhoneMenu from './PhoneMenu'

const Header = () => {

    let [transparentNavbar, setTransparentNavbar] = useState(false)

    const changeNavbar = () => {
        window.scrollY < 100 ? setTransparentNavbar(false) : setTransparentNavbar(true)
    }

    window.addEventListener('scroll', changeNavbar)

    return (
        <header className={transparentNavbar ? styles.solidHeader : styles.header}>
            <nav className={styles.headerContainer}>
                <Menu />
                <PhoneMenu />
            </nav>
        </header>
    )
}

export default Header