import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import MotionY from '../animation/MotionY'

import styles from './About.module.css'

import me from './assets/me.webp'
import gptImage from './assets/chatgpt.png'

const About = () => {

    const { t } = useTranslation("aboutSection")

    return (
        <section className={styles.about} id="about">
            <h2>{t('about')}</h2>
            <div className={styles.aboutContent}>
                <div className={styles.imgContainer}>
                    <img src={me} alt="Victor's picture" />
                </div>
                <div className={styles.aboutTxtContainer}>
                    <div className={styles.aboutTxt}>
                        <MotionY>
                            <p>
                                <Trans i18nKey={t('aboutP1')} />
                            </p>
                        </MotionY>
                        <MotionY>
                            <p>
                                <Trans i18nKey={t('aboutP2')} />
                            </p>
                        </MotionY>
                        <MotionY>
                            <p>
                                <Trans i18nKey={t('aboutP3')} />
                            </p>
                        </MotionY>
                        <MotionY>
                            <p>
                                {t('aboutP4')} <a href="https://www.linkedin.com/in/victor-fo/" target='_blank' rel="noreferrer"><b>{t('aboutLink')}</b></a>.
                            </p>
                        </MotionY>
                    </div>
                </div>
            </div>
            <MotionY>
                <div className={styles.gptContainer}>
                    <div className={styles.gpt}>
                        <img className={styles.gptImage} src={gptImage} alt="ChatGPT logo" />
                        <p>
                            &quot;{t('gptP1')}
                            <br /><br />
                            {t('gptP2')}&quot;
                        </p>
                        <p className={styles.chatgpt}>
                            - ChatGPT {t('gptAuthor')}
                        </p>
                    </div>
                </div>
            </MotionY>
        </section>
    )
}

export default About
