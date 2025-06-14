import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import MotionY from '../animation/MotionY'

import styles from './About.module.css'

import vicIcon from './assets/vic-icon.png'
import gptImage from './assets/chatgpt.png'

const About = () => {

    const { t } = useTranslation("aboutSection")

    return (
        <section className={styles.about} id="about">
            <h2>{t('about')}</h2>
            <div className={styles.aboutContent}>
                <div className={styles.aboutTxt}>
                    <MotionY>
                        <p className={`${styles.txtRight} ${styles.imgDialogue}`}>
                            <img className={styles.txtImage} src={vicIcon} alt="ChatGPT logo" />
                            <Trans i18nKey={t('aboutP1')} />
                        </p>
                    </MotionY>
                    <MotionY>
                        <p className={styles.txtRight}>
                            <Trans i18nKey={t('aboutP2')} />
                        </p>
                    </MotionY>
                    <MotionY>
                        <p className={styles.txtRight}>
                            <Trans i18nKey={t('aboutP3')} />
                        </p>
                    </MotionY>
                </div>
                <MotionY>
                    <div className={styles.aboutTxt}>
                        <p className={`${styles.imgDialogue} ${styles.quote}`}>
                            <img className={styles.txtImage} src={gptImage} alt="ChatGPT logo" />
                            &quot;{t('gptP1')}
                            <br /><br />
                            {t('gptP2')}&quot;
                            <span className={styles.author}>
                                - ChatGPT {t('gptAuthor')}
                            </span>
                        </p>
                    </div>
                </MotionY>
                <div className={styles.aboutTxt}>
                    <MotionY>
                        <p className={`${styles.txtRight} ${styles.imgDialogue}`}>
                            <img className={styles.txtImage} src={vicIcon} alt="ChatGPT logo" />
                            {t('aboutP4')} <a href="https://www.linkedin.com/in/victor-fo/" target='_blank' rel="noreferrer"><b>{t('aboutLink')}</b></a>.
                        </p>
                    </MotionY>
                </div>
            </div>
        </section>
    )
}

export default About
