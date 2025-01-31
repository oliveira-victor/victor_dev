import { useState } from "react"
import { useTranslation } from "react-i18next"

import Card from "./Card"

import styles from "./Projects.module.css"

import html from '../assets/logo-html.svg'
import css from '../assets/logo-css.svg'
import javascript from '../assets/logo-javascript.svg'
import react from '../assets/logo-react.svg'
import gulp from '../assets/logo-gulp.svg'
import sass from '../assets/logo-sass.svg'
import styledComponents from '../assets/logo-styledComponents.png'
import redux from '../assets/ico-redux.svg'
import typescript from '../assets/ico-typescript.svg'
import next from '../assets/next-js.svg'

import arrow from '../assets/arrow.svg'

import digitaldice from './assets/digitaldice.webp'
import avatarmaker from './assets/avatarmaker.webp'
import mamimoon from './assets/mamimoon.webp'
import vfostudio from './assets/vfo-theme.webp'
import vfoshop from './assets/vfoshop.webp'
import number from './assets/number.webp'
import chef from './assets/mygoodchef.webp'
import weatherApp from './assets/weather.webp'

import digitalDiceVideo from './assets/digitaldice-video.mp4'
import avatarMakerVideo from './assets/avatarmaker-video.mp4'
import mamiMoonVideo from './assets/mamimoon-video.mp4'
import VFOStudioVideo from './assets/vfostudio-video.mp4'
import VFOShopVideo from './assets/vfoshop-video.mp4'
import guessTheNumberVideo from './assets/guessthenumber-video.mp4'
import myGoodChef from './assets/mygoodchef-video.mp4'
import weatherAppVideo from './assets/EBAC-Weather-App.mp4'
import MotionY from "../animation/MotionY"

const CardsDisplay = () => {

    const { t } = useTranslation("projectsSection")

    const [toggleExtraCards, setToggleExtraCards] = useState(false)

    const cardsData1 = [
        {
            title: "VFO Studio",
            image: vfostudio,
            media: VFOStudioVideo,
            text: t('cardVFOstudio'),
            techs: [next, typescript, sass],
            list: ["Next.js", "TypeScript", "Sass"],
            api: true,
            team: false,
            github: null,
            pageLink: "https://vfostudio.vercel.app/"
        },
        {
            title: "Avatar Maker",
            image: avatarmaker,
            media: avatarMakerVideo,
            text: t('cardAvatarMaker'),
            techs: [react, redux, typescript, styledComponents],
            list: ["React", "Redux", "TypeScript", "Styled-Components", "i18next", "html2canvas"],
            api: false,
            team: false,
            github: "https://github.com/oliveira-victor/avatar_maker",
            pageLink: "https://theavatarmaker.vercel.app/"
        },
        {
            title: "My Good Chef",
            image: chef,
            media: myGoodChef,
            text: t('cardMyGoodChef'),
            techs: [react, redux, typescript, styledComponents],
            list: ["React", "Redux", "TypeScript", "Styled-Components", "React-Router", "Formik", "Yup", "React Spinner"],
            api: true,
            team: false,
            github: "https://github.com/oliveira-victor/avatar_maker",
            pageLink: "https://mygoodchef.vercel.app/"
        },
        {
            title: "Weather App",
            image: weatherApp,
            media: weatherAppVideo,
            text: t('cardWeatherApp'),
            techs: [react, redux, typescript, styledComponents],
            list: ["React", "Redux", "TypeScript", "Styled-Components", "React-Router", "React-Multi-Carousel", "WeatherAPI", "Google Maps API", "Big Data Cloud API"],
            api: true,
            team: true,
            github: "https://github.com/oliveira-victor/EBAC-WeatherApp",
            pageLink: "https://ebaclima.vercel.app"
        }
    ]

    const cardsData2 = [
        {
            title: "Digital Dice",
            image: digitaldice,
            media: digitalDiceVideo,
            text: t('cardDigitalDice'),
            techs: [react, redux, typescript, styledComponents],
            list: ["React", "Redux", "TyoeScript", "Styled-Components", "React-Router-DOM", "Formik", "Yup", "API"],
            api: true,
            team: false,
            github: "https://github.com/oliveira-victor/digital_dice",
            pageLink: "https://digitaldice.vercel.app/"
        },
        {
            title: "Mami Moon",
            image: mamimoon,
            media: mamiMoonVideo,
            text: t('cardMamiMoon'),
            techs: [html, javascript, sass, gulp],
            list: ["HTML", "JavaScript", "Sass", "Gulp", "AOS", "Formsubmit"],
            api: true,
            team: false,
            github: null,
            pageLink: "https://doulamamimoon.com/"
        },
        {
            title: "VFO Shop",
            image: vfoshop,
            media: VFOShopVideo,
            text: t('cardVFOShop'),
            techs: [react, typescript, styledComponents],
            list: ["React", "TypeScript", "Styled-Components"],
            api: false,
            team: false,
            github: "https://github.com/oliveira-victor/VFO_Shop",
            pageLink: "https://vfoshop.vercel.app/"
        },
        {
            title: "Guess The Number",
            image: number,
            media: guessTheNumberVideo,
            text: t('cardNumbersGame'),
            techs: [html, css, javascript],
            list: ["HTML", "CSS", "JavaScript"],
            api: false,
            team: false,
            github: "https://github.com/oliveira-victor/guess_the_number",
            pageLink: "https://guessthenumber-game.vercel.app/"
        }
    ]

    return (
        <>
            <div className={styles.mainCardsContainer}>
                {cardsData1.map((card, index) => (
                    <div className="fadeIn" key={index}>
                        <Card
                            link={card.pageLink}
                            cardTitle={card.title}
                            image={card.image}
                            text={card.text}
                            api={card.api}
                            team={card.team}
                            modal={cardsData1[index]}
                        />
                    </div>
                ))}
                {!toggleExtraCards ?
                    <div className={styles.loadMoreCardsMobile}>
                        <div>
                            <button className={styles.loadMoreCardsMobile} onClick={() => setToggleExtraCards(true)}>
                                +
                            </button>
                            <span>{t('loadMoreCardsMobile')}</span>
                        </div>
                    </div>
                    : ''
                }
                {toggleExtraCards && (
                    cardsData2.map((card, index) => (
                        <div className="fadeIn" key={index}>
                            <Card
                                link={card.pageLink}
                                cardTitle={card.title}
                                image={card.image}
                                text={card.text}
                                api={card.api}
                                team={card.team}
                                modal={cardsData2[index]}
                            />
                        </div>
                    ))
                )}
            </div>
            {!toggleExtraCards ?
                <MotionY>
                    <div className={styles.loadMoreCards} onClick={() => setToggleExtraCards(true)}><span>{t('loadMoreCards')}</span> <img className="float" src={arrow} alt="Arrow down icon" /></div>
                </MotionY>
                : ''
            }
        </>
    )
}

export default CardsDisplay
