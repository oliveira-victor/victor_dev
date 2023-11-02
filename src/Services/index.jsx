import { useState } from 'react'
import styles from './Services.module.css'

import Accordion from './Accordion'
import Char from './Char'

import avatar3d from './assets/vfo-ai.webp'
import service1 from './assets/service1.svg'
import service2 from './assets/service2.svg'
import service3 from './assets/service3.svg'
import service4 from './assets/service4.svg'

import artwork from './assets/artwork.webp'
import art1 from './assets/art1.jpg'
import art2 from './assets/art2.jpg'
import art3 from './assets/art3.jpg'
import art4 from './assets/art4.jpg'
import vfologo from './assets/vfologo.svg'

import html from '../assets/logo-html.svg'
import css from '../assets/logo-css.svg'
import javascript from '../assets/logo-javascript.svg'
import sass from '../assets/logo-sass.svg'
import react from '../assets/logo-react.svg'
import styledComponents from '../assets/logo-styledComponents.png'
import typescript from '../assets/logo-typescript.svg'
import { useTranslation } from 'react-i18next'

const Services = () => {

    const { t } = useTranslation('servicesSection')

    const [toggleWebdev, setToggleWebdev] = useState(true);
    const [toggleDesign, setToggleDesign] = useState(false);

    const handleToggleWebdev = () => {
        setToggleDesign(false);
        setToggleWebdev(true);
    }

    const handleToggleDesign = () => {
        setToggleWebdev(false);
        setToggleDesign(true);
    }

    return (
        <section className={styles.services} id="services">
            <h2>{t('servicesTitle')}</h2>
            <div className={styles.servicesContainer}>
                <div className={styles.buttonsWrapper}>
                    <div className={toggleWebdev ? `${styles.serviceBtn_isSelected} ${styles.servicesBtn}` : `${styles.servicesBtn}`} onClick={handleToggleWebdev}>
                        <h3 className={toggleWebdev ? `${styles.selectedBtn}` : ''}>{t('webdev')}</h3>
                    </div>
                    <div className={toggleDesign ? `${styles.serviceBtn_isSelected} ${styles.servicesBtn}` : `${styles.servicesBtn}`} onClick={handleToggleDesign}>
                        <h3 className={toggleDesign ? `${styles.selectedBtn}` : ''}>{t('design')}</h3>
                    </div>
                </div>
                {toggleWebdev &&
                    <div className={`fadeIn ${styles.canvas}`}>
                        <div className={styles.upContainer}>
                            <div className={styles.leftSide}>
                                <img src={avatar3d} alt="Victor 3D avatar" />
                            </div>
                            <div className={styles.rightSide}>
                                <span className={styles.rightSideTitle}>{t('devTitle')}</span>
                                <div className={styles.servicesIcons}>
                                    <div className={styles.servCard}>
                                        <img src={service1} alt="Laptop and smartphone icons" />
                                        <span className={styles.servCardTitle}>{t('responsive')}</span>
                                        <p>
                                            {t('responsiveSub')}
                                        </p>
                                    </div>
                                    <div className={styles.servCard}>
                                        <img src={service2} alt="Clock icon" />
                                        <span className={styles.servCardTitle}>{t('fast')}</span>
                                        <p>
                                            {t('fastSub')}
                                        </p>
                                    </div>
                                    <div className={styles.servCard}>
                                        <img src={service3} alt="Thumb up icon" />
                                        <span className={styles.servCardTitle}>{t('userFriendly')}</span>
                                        <p>
                                            {t('userFriendlySub')}
                                        </p>
                                    </div>
                                    <div className={styles.servCard}>
                                        <img src={service4} alt="Planets icon" />
                                        <span className={styles.servCardTitle}>{t('dynamic')}</span>
                                        <p>
                                            {t('dynamicSub')}
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    {t('devTxt')}
                                </p>
                            </div>
                        </div>
                        <div className={styles.downContainer}>
                            <div className={styles.techsContainer}>
                                <h4>{t('mySkills')}</h4>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Sass</li>
                                    <li>React</li>
                                    <li>Styled Components</li>
                                    <li>Gulp</li>
                                    <li>Git</li>
                                    <li>Typescript</li>
                                    <li>VS Code</li>
                                </ul>
                            </div>
                            <div className={styles.charsContainer}>
                                <Char tech={html} distance={screen.availWidth > 767 ? '90%' : '90%'} />
                                <Char tech={css} distance={screen.availWidth > 767 ? '87%' : '84%'} />
                                <Char tech={sass} distance={screen.availWidth > 767 ? '75%' : '73%'} />
                                <Char tech={javascript} distance={screen.availWidth > 767 ? '63%' : '57%'} />
                                <Char tech={react} distance={screen.availWidth > 767 ? '55%' : '45%'} />
                                <Char tech={styledComponents} distance={screen.availWidth > 767 ? '46%' : '32%'} />
                                <Char tech={typescript} distance={screen.availWidth > 767 ? '23%' : '10%'} />
                            </div>
                            <p>{t('someExamples')}</p>
                            <Accordion
                                question={t('question1')}
                                answer={t('answer1')}
                            />
                            <Accordion
                                question={t('question2')}
                                answer={t('answer2')}
                            />
                            <Accordion
                                question={t('question3')}
                                answer={t('answer3')}
                            />
                            <Accordion
                                question={t('question4')}
                                answer={t('answer4')}
                            />
                            <Accordion
                                question={t('question5')}
                                answer={t('answer5')}
                            />
                            <Accordion
                                question={t('question6')}
                                answer={t('answer6')}
                            />
                            <a href='#services' onClick={handleToggleDesign}>
                                <button className={styles.changeServiceLink}>{t('seeAlsoDesign')}</button>
                            </a>
                        </div>
                    </div>}
                {toggleDesign &&
                    <div className={`fadeIn ${styles.canvas}`}>
                        <div className={styles.upContainer}>
                            <div className={styles.leftSide}>
                                <img src={artwork} alt="Digital art" />
                            </div>
                            <div className={styles.rightSide}>
                                <span className={styles.rightSideTitle}>{t('designTitle')}</span>
                                <div className={styles.servicesIcons}>
                                    <div className={styles.servCard}>
                                        <img src={art1} alt="Ui and UX icon" />
                                        <span className={styles.servCardTitle}>{t('uiux')}</span>
                                        <p>
                                            {t('uiuxSub')}
                                        </p>
                                    </div>
                                    <div className={styles.servCard}>
                                        <img src={art2} alt="Graphic design icon" />
                                        <span className={styles.servCardTitle}>{t('graphicDesign')}</span>
                                        <p>
                                            {t('graphicDesignSub')}
                                        </p>
                                    </div>
                                    <div className={styles.servCard}>
                                        <img src={art3} alt="Illustration icon" />
                                        <span className={styles.servCardTitle}>{t('illustration')}</span>
                                        <p>
                                            {t('illustrationSub')}
                                        </p>
                                    </div>
                                    <div className={styles.servCard}>
                                        <img src={art4} alt="Animation icon" />
                                        <span className={styles.servCardTitle}>{t('animation')}</span>
                                        <p>
                                            {t('animationSub')}
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    {t('designTxt')}
                                </p>
                            </div>
                        </div>
                        <div className={styles.downContainer}>
                            <div className={styles.techsContainer}>
                                <h4>{t('designTools')}</h4>
                                <ul>
                                    <li>Figma</li>
                                    <li>GIMP</li>
                                    <li>Krita</li>
                                    <li>InkScape</li>
                                </ul>
                            </div>
                            <div className={styles.artBanner}>
                                <div className={styles.vfoContainer}>
                                    <div className={styles.vfoLeft}>
                                        <img src={vfologo} alt="VFO Studio logo" />
                                    </div>
                                    <div className={styles.vfoRight}>
                                        <div>
                                            <p>{t('visitVFO')}</p>
                                            <a href="https://vfostudio.vercel.app/"><button className={styles.visitVfoBtn}>{t('visitVFObtn')}</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>{t('designExamṕles')}</p>
                            <Accordion
                                question={t('designQuestion1')}
                                answer={t('designAnswer1')}
                            />
                            <Accordion
                                question={t('designQuestion2')}
                                answer={t('designAnswer2')}
                            />
                            <Accordion
                                question={t('designQuestion3')}
                                answer={t('designAnswer3')}
                            />
                            <Accordion
                                question={t('designQuestion4')}
                                answer={t('designAnswer4')}
                            />
                            <Accordion
                                question={t('designQuestion5')}
                                answer={t('designAnswer5')}
                            />
                            <Accordion
                                question={t('designQuestion6')}
                                answer={t('designAnswer6')}
                            />
                            
                            <a href='#services' onClick={handleToggleWebdev}>
                                <button className={styles.changeServiceLink}>{t('seeAlsoDev')}</button>
                            </a>
                        </div>
                    </div>}
            </div>
            <br />
        </section>
    )
}

export default Services