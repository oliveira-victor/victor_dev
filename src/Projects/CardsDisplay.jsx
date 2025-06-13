import { useState } from "react"
import { useTranslation } from "react-i18next"

import Card from "./Card"
import MotionY from "../animation/MotionY"

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
import linaria from '../assets/logo-linaria.svg'
import supabase from '../assets/logo-supabase.svg'
import arrow from '../assets/arrow.svg'

import festalink from './assets/festalink.webp'
import digitaldice from './assets/digitaldice.webp'
import avatarmaker from './assets/avatarmaker.webp'
import mamimoon from './assets/mamimoon.webp'
import vfostudio from './assets/vfo-theme.webp'
import vfoshop from './assets/vfoshop.webp'
import number from './assets/number.webp'
import chef from './assets/mygoodchef.webp'
import weatherApp from './assets/weather.webp'
import riverCrossing from './assets/river-crossing.webp'

import digitalDiceVideo from './assets/digitaldice-video.mp4'
import avatarMakerVideo from './assets/avatarmaker-video.mp4'
import mamiMoonVideo from './assets/mamimoon-video.mp4'
import VFOStudioVideo from './assets/vfostudio-video.mp4'
import VFOShopVideo from './assets/vfoshop-video.mp4'
import guessTheNumberVideo from './assets/guessthenumber-video.mp4'
import myGoodChef from './assets/mygoodchef-video.mp4'
import weatherAppVideo from './assets/EBAC-Weather-App.mp4'
import riverCrossingVideo from './assets/river-crossing-video.mp4'

const CardsDisplay = () => {

    const { t } = useTranslation("projectsSection")

    const cardsData = [
        {
            id: 1,
            title: "FestaLink",
            image: festalink,
            media: VFOStudioVideo,
            text: t('cardVFOstudio'),
            techs: {
                icons: [next, typescript, redux, linaria, supabase],
                titles: ['Next.js', 'TypeScript', "Redux", 'Linaria', "Supabase"]
            },
            list: ["Next.js", "TypeScript", "Redux", "Linaria", "Supabase"],
            api: true,
            team: false,
            github: null,
            pageLink: "https://vfostudio.vercel.app/"
        },
        {
            id: 2,
            title: "VFO Studio",
            image: vfostudio,
            media: VFOStudioVideo,
            text: t('cardVFOstudio'),
            techs: {
                icons: [next, typescript, sass],
                titles: ['Next.js', 'TypeScript', 'Sass']
            },
            list: ["Next.js", "TypeScript", "Sass"],
            api: true,
            team: false,
            github: null,
            pageLink: "https://vfostudio.vercel.app/"
        },
        {
            id: 3,
            title: "Avatar Maker",
            image: avatarmaker,
            media: avatarMakerVideo,
            text: t('cardAvatarMaker'),
            techs: {
                icons: [react, redux, typescript, styledComponents],
                titles: ['React', 'Redux', 'TypeScript', 'Styled-Components']
            },
            list: ["React", "Redux", "TypeScript", "Styled-Components", "i18next", "html2canvas"],
            api: false,
            team: false,
            github: "https://github.com/oliveira-victor/avatar_maker",
            pageLink: "https://theavatarmaker.vercel.app/"
        },
        {
            id: 4,
            title: "My Good Chef",
            image: chef,
            media: myGoodChef,
            text: t('cardMyGoodChef'),
            techs: {
                icons: [react, redux, typescript, styledComponents],
                titles: ['React', 'Redux', 'TypeScript', 'Styled-Components']
            },
            list: ["React", "Redux", "TypeScript", "Styled-Components", "React-Router", "Formik", "Yup", "React Spinner"],
            api: true,
            team: false,
            github: "https://github.com/oliveira-victor/avatar_maker",
            pageLink: "https://mygoodchef.vercel.app/"
        },
        {
            id: 5,
            title: "Weather App",
            image: weatherApp,
            media: weatherAppVideo,
            text: t('cardWeatherApp'),
            techs: {
                icons: [react, redux, typescript, styledComponents],
                titles: ['React', 'Redux', 'TypeScript', 'Styled-Components']
            },
            list: ["React", "Redux", "TypeScript", "Styled-Components", "React-Router", "React-Multi-Carousel", "WeatherAPI", "Google Maps API", "Big Data Cloud API"],
            api: true,
            team: true,
            github: "https://github.com/oliveira-victor/EBAC-WeatherApp",
            pageLink: "https://ebaclima.vercel.app"
        },
        {
            id: 6,
            title: "Digital Dice",
            image: digitaldice,
            media: digitalDiceVideo,
            text: t('cardDigitalDice'),
            techs: {
                icons: [react, redux, typescript, styledComponents],
                titles: ['React', 'Redux', 'TypeScript', 'Styled-Components']
            },
            list: ["React", "Redux", "TyoeScript", "Styled-Components", "React-Router-DOM", "Formik", "Yup", "API"],
            api: true,
            team: false,
            github: "https://github.com/oliveira-victor/digital_dice",
            pageLink: "https://digitaldice.vercel.app/"
        },
        {
            id: 7,
            title: "Mami Moon",
            image: mamimoon,
            media: mamiMoonVideo,
            text: t('cardMamiMoon'),
            techs: {
                icons: [html, javascript, sass, gulp],
                titles: ['HTML', 'JavaScript', 'Sass', 'Gulp']
            },
            list: ["HTML", "JavaScript", "Sass", "Gulp", "AOS", "Formsubmit"],
            api: true,
            team: false,
            github: null,
            pageLink: "https://doulamamimoon.com/"
        },
        {
            id: 8,
            title: "VFO Shop",
            image: vfoshop,
            media: VFOShopVideo,
            text: t('cardVFOShop'),
            techs: {
                icons: [react, typescript, styledComponents],
                titles: ['React', 'TypeScript', 'Styled-Components']
            },
            list: ["React", "TypeScript", "Styled-Components"],
            api: false,
            team: false,
            github: "https://github.com/oliveira-victor/VFO_Shop",
            pageLink: "https://vfoshop.vercel.app/"
        },
        {
            id: 9,
            title: "Guess The Number",
            image: number,
            media: guessTheNumberVideo,
            text: t('cardNumbersGame'),
            techs: {
                icons: [html, css, javascript],
                titles: ['HTML', 'CSS', 'JavaScript']
            },
            list: ["HTML", "CSS", "JavaScript"],
            api: false,
            team: false,
            github: "https://github.com/oliveira-victor/guess_the_number",
            pageLink: "https://guessthenumber-game.vercel.app/"
        },
        {
            id: 10,
            title: "River Crossing Puzzle",
            image: riverCrossing,
            media: riverCrossingVideo,
            text: t('cardRiverCrossing'),
            techs: {
                icons: [html, css, javascript],
                titles: ['HTML', 'CSS', 'JavaScript']
            },
            list: ["HTML", "CSS", "JavaScript"],
            api: false,
            team: false,
            github: "https://github.com/oliveira-victor/river-crossing-puzzle",
            pageLink: "http://rivercrossing.vercel.app/"
        }
    ]

    const [showExtraCards, setShowExtraCards] = useState(false)
    const [isSelected, setIsSelected] = useState("Highlights")
    const [currentCards, setCurrentCards] = useState(cardsData.slice(0, 4))
    const [extraCards, setExtraCards] = useState(cardsData.slice(4, 8))

    const filterOptions = {
        all: cardsData.map(card => card.id),
        highlights: [1, 2, 3, 4, 5, 6, 7, 8],
        saas: [1],
        real: [2, 7],
        ecommerce: [4, 6],
        games: [3, 9, 10],
        api: [1, 2, 4, 5, 6, 7],
        team: [5]
    }

    const filterBtns = [
        { txt: t('filterBtns.btn1'), title: "Highlights", action: filterOptions.highlights },
        { txt: 'SaaS', title: "Software As A Service", action: filterOptions.saas },
        { txt: t('filterBtns.btn2'), title: "Real businesses", action: filterOptions.real },
        { txt: t('filterBtns.btn3'), title: "eCommerce", action: filterOptions.ecommerce },
        { txt: t('filterBtns.btn4'), title: "Games & entertainment", action: filterOptions.games },
        { txt: t('filterBtns.btn5'), title: "API", action: filterOptions.api },
        { txt: t('filterBtns.btn6'), title: "Team work", action: filterOptions.team },
        { txt: t('filterBtns.btn7'), title: "All", action: filterOptions.all }
    ]

    const btnAction = (title, action) => {
        setIsSelected(title)

        const newCardsList = []
        for (let i = 0; i < cardsData.length; i++) {
            if (action.includes(cardsData[i].id)) {
                newCardsList.push(cardsData[i]);
            }
        }

        if (newCardsList.length > 4 && title === "Highlights") {
            setCurrentCards(newCardsList.slice(0, 4))
            setExtraCards(newCardsList.slice(4, 8))
        } else {
            setCurrentCards(newCardsList)
        }
    }

    return (
        <>
            <ul>
                {filterBtns.map((btn, index) => (
                    <li
                        key={index}
                        className={isSelected === btn.title ? styles.selectedBtn : ''}
                        onClick={() => btnAction(btn.title, btn.action)}
                    >
                        {btn.txt}
                    </li>
                ))}
            </ul>
            <div className={styles.mainCardsContainer}>
                {currentCards.map((card, index) => (
                    <div className="fadeIn" key={card.id}>
                        <Card
                            link={card.pageLink}
                            cardTitle={card.title}
                            image={card.image}
                            ico={card.techs}
                            text={card.text}
                            api={card.api}
                            team={card.team}
                            modal={currentCards[index]}
                        />
                    </div>
                ))}

                {!showExtraCards && isSelected === "Highlights" ?
                    <div className={styles.loadMoreCardsMobile}>
                        <div>
                            <button className={styles.loadMoreCardsMobile} onClick={() => setShowExtraCards(true)}>
                                +
                            </button>
                            <span>{t('loadMoreCardsMobile')}</span>
                        </div>
                    </div>
                    : ''
                }

                {showExtraCards && isSelected === "Highlights" && (
                    extraCards.map((card, index) => (
                        <div className="fadeIn" key={index}>
                            <Card
                                link={card.pageLink}
                                cardTitle={card.title}
                                image={card.image}
                                ico={card.techs}
                                text={card.text}
                                api={card.api}
                                team={card.team}
                                modal={extraCards[index]}
                            />
                        </div>
                    ))
                )}
            </div>
            
            {!showExtraCards && isSelected === "Highlights" ?
                <MotionY>
                    <div className={styles.loadMoreCards} onClick={() => setShowExtraCards(true)}><span>{t('loadMoreCards')}</span> <img className="float" src={arrow} alt="Arrow down icon" /></div>
                </MotionY>
                : ''
            }
        </>
    )
}

export default CardsDisplay
