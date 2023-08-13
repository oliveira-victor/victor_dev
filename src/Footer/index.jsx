import styles from './Footer.module.css'

import vfo from '../assets/vfo_white.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <img src={vfo} alt="VFO logo" />
                <div className={styles.footerTxt}>
                    &copy;2023 Victor Freire Oliveira • Front-end developer | Multimedia Designer • All rights reserved
                </div>
                <div className="footerIcons">
                    <a href="https://www.linkedin.com/in/victor-fo/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="LinkedIn icon" />
                    </a>
                    <a href="https://github.com/oliveira-victor" target="_blank" rel="noreferrer">
                        <img src={github} alt="GitHub icon" />
                    </a>
                </div>
            </div>
            <div className={styles.emptyMobileSpace}></div>
        </footer>
    )
}

export default Footer