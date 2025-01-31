import { useRef, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import MotionFlip from '../animation/MotionFlip'
import MotionY from '../animation/MotionY'
import Accordion from './Accordion'

import styles from './Services.module.css'

import avatar3d from './assets/vfo-ai.webp'
import topLayer from './assets/vfo-ai-toplayer.webp'
import service1 from './assets/service1.svg'
import service2 from './assets/service2.svg'
import service3 from './assets/service3.svg'
import service4 from './assets/service4.svg'

import htmlIcon from '../assets/logo-html.svg'
import cssIcon from '../assets/logo-css.svg'
import reactIcon from '../assets/logo-react.svg'
import javascriptIcon from '../assets/logo-javascript.svg'
import typescriptIcon from '../assets/logo-typescript.svg'
import gitIcon from '../assets/logo-git.svg'
import nextIcon from '../assets/logo-nextjs.svg'

import artwork from './assets/artwork.webp'
import art1 from './assets/art1.jpg'
import art2 from './assets/art2.jpg'
import art3 from './assets/art3.jpg'
import art4 from './assets/art4.jpg'
import vfologo from './assets/vfologo.svg'

const Services = () => {

    const avatarRef = useRef()

    const { t } = useTranslation('servicesSection')

    const [switchTab, setSwitchTab] = useState(false)

    const [animateIcons, setAnimateIcons] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting === true) {
                setAnimateIcons(true)
            }
        }, { threshold: [1] })
        observer.observe(avatarRef.current)
    }, [])

    const devAccordionData = [
        { question: t('question1'), answer: t('answer1') },
        { question: t('question2'), answer: t('answer2') },
        { question: t('question3'), answer: t('answer3') },
        { question: t('question4'), answer: t('answer4') },
        { question: t('question5'), answer: t('answer5') },
        { question: t('question6'), answer: t('answer6') }
    ]

    const artAccordionData = [
        { question: t('designQuestion1'), answer: t('designAnswer1') },
        { question: t('designQuestion2'), answer: t('designAnswer2') },
        { question: t('designQuestion3'), answer: t('designAnswer3') },
        { question: t('designQuestion4'), answer: t('designAnswer4') },
        { question: t('designQuestion5'), answer: t('designAnswer5') },
        { question: t('designQuestion6'), answer: t('designAnswer6') }
    ]

    const servicesData = [
        { img: service1, alt: 'Laptop and smartphone icons', title: t('responsive'), txt: t('responsiveSub') },
        { img: service2, alt: 'Clock icon', title: t('fast'), txt: t('fastSub') },
        { img: service3, alt: 'Thumb up icon', title: t('userFriendly'), txt: t('userFriendlySub') },
        { img: service4, alt: 'Planets icon', title: t('dynamic'), txt: t('dynamicSub') }
    ]

    return (
        <section className={styles.services} id="services">
            <h2>{t('servicesTitle')}</h2>
            <div className={styles.servicesContainer}>
                <div className={styles.buttonsWrapper}>
                    <button className={!switchTab ? styles.selectedButton : styles.unselectedButton} onClick={() => setSwitchTab(false)}>
                        <h3 className={!switchTab ? styles.selectedBtn : ''}>{t('webdev')}</h3>
                    </button>
                    <button className={switchTab ? styles.selectedButton : styles.unselectedButton} onClick={() => setSwitchTab(true)}>
                        <h3 className={switchTab ? styles.selectedBtn : ''}>{t('design')}</h3>
                    </button>
                </div>
                {!switchTab &&
                    <div className={`fadeIn ${styles.canvas}`}>
                        <div className={styles.upContainer}>
                            <div className={styles.leftSide}>
                                <MotionY delay={0}>
                                    <div ref={avatarRef} className={styles.avatarContainer}>
                                        <img className={styles.topLayer} src={topLayer} alt="Laptop lid" />
                                        {animateIcons && (
                                            <>
                                                <img id={styles.anim1} src={htmlIcon} alt="HTML icon" />
                                                <img id={styles.anim2} src={cssIcon} alt="CSS icon" />
                                                <img id={styles.anim3} src={reactIcon} alt="React icon" />
                                                <img id={styles.anim4} src={nextIcon} alt="Next.js icon" />
                                                <img id={styles.anim5} src={typescriptIcon} alt="TypeScript icon" />
                                                <img id={styles.anim6} src={gitIcon} alt="Git icon" />
                                                <img id={styles.anim7} src={javascriptIcon} alt="JavaScript icon" />
                                            </>
                                        )}
                                        <img className={styles.leftImg} src={avatar3d} alt="Victor 3D avatar" />
                                    </div>
                                </MotionY>
                            </div>
                            <div className={styles.rightSide}>
                                <span className={styles.rightSideTitle}>{t('devTitle')}</span>
                                <div className={styles.servicesIcons}>
                                    {servicesData.map((item, index) => (
                                        <div key={index} className={styles.servCard}>
                                            <MotionFlip delay={0}>
                                                <img src={item.img} alt={item.alt} />
                                            </MotionFlip>
                                            <h3 className={styles.servCardTitle}>{item.title}</h3>
                                            <p>
                                                {item.txt}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <MotionY>
                                    <p>
                                        {t('devTxt')}
                                    </p>
                                </MotionY>
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
                                    <li>Next.js</li>
                                    <li>Redux</li>
                                    <li>Styled Components</li>
                                    <li>Gulp</li>
                                    <li>Git</li>
                                    <li>Typescript</li>
                                </ul>
                            </div>
                            <p>{t('someExamples')}</p>
                            {devAccordionData.map(({ question, answer }, index) => (
                                <MotionY key={index} delay={`0.${index}`}>
                                    <Accordion
                                        question={question}
                                        answer={answer}
                                    />
                                </MotionY>
                            ))}
                            <a href='#services' onClick={() => setSwitchTab(!switchTab)}>
                                <button className={styles.changeServiceLink}>{t('seeAlsoDesign')}</button>
                            </a>
                        </div>
                    </div>}
                {switchTab &&
                    <div className={`fadeIn ${styles.canvas}`}>
                        <div className={styles.upContainer}>
                            <div className={styles.leftSide}>
                                <MotionY delay={0}>
                                    <div ref={avatarRef} className={styles.avatarContainer}>
                                        <img className={styles.leftImg} src={artwork} alt="Digital art" />
                                    </div>
                                </MotionY>
                            </div>
                            <div className={styles.rightSide}>
                                <span className={styles.rightSideTitle}>{t('designTitle')}</span>
                                <div className={styles.servicesIcons}>
                                    <div className={styles.servCard}>
                                        <MotionFlip delay={0}>
                                            <img src={art1} alt="Ui and UX icon" />
                                        </MotionFlip>
                                        <span className={styles.servCardTitle}>{t('uiux')}</span>
                                        <p>
                                            {t('uiuxSub')}
                                        </p>
                                    </div>
                                    <div className={styles.servCard}>
                                        <MotionFlip delay={0}>
                                            <img src={art2} alt="Graphic design icon" />
                                        </MotionFlip>
                                        <span className={styles.servCardTitle}>{t('graphicDesign')}</span>
                                        <p>
                                            {t('graphicDesignSub')}
                                        </p>
                                    </div>
                                    <div className={styles.servCard}>
                                        <MotionFlip delay={0}>
                                            <img src={art3} alt="Illustration icon" />
                                        </MotionFlip>
                                        <span className={styles.servCardTitle}>{t('illustration')}</span>
                                        <p>
                                            {t('illustrationSub')}
                                        </p>
                                    </div>
                                    <div className={styles.servCard}>
                                        <MotionFlip delay={0}>
                                            <img src={art4} alt="Animation icon" />
                                        </MotionFlip>
                                        <span className={styles.servCardTitle}>{t('animation')}</span>
                                        <p>
                                            {t('animationSub')}
                                        </p>
                                    </div>
                                </div>
                                <MotionY delay={0}>
                                    <p>
                                        {t('designTxt')}
                                    </p>
                                </MotionY>
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
                            {artAccordionData.map(({ question, answer }, index) => (
                                <MotionY key={index} delay={`0.${index}`}>
                                    <Accordion
                                        key={index}
                                        question={question}
                                        answer={answer}
                                    />
                                </MotionY>
                            ))}

                            <a href='#services' onClick={() => setSwitchTab(!switchTab)}>
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
