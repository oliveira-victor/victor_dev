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

import arrow from '../assets/arrow.svg'

import digitaldice from './assets/digitaldice.webp'
import avatarmaker from './assets/avatarmaker.webp'
import mamimoon from './assets/mamimoon.webp'
import vfostories from './assets/vfostories.webp'
import vfostudio from './assets/vfo-theme.webp'
import number from './assets/number.webp'
import chef from './assets/mygoodchef.webp'

import digitalDiceVideo from './assets/digitaldice-video.mp4'
import avatarMakerVideo from './assets/avatarmaker-video.mp4'
import mamiMoonVideo from './assets/mamimoon-video.mp4'
import VFOStoriesVideo from './assets/vfostories-video.mp4'
import VFOStudioVideo from './assets/vfostudio-video.mp4'
import guessTheNumberVideo from './assets/guessthenumber-video.mp4'
import myGoodChef from './assets/mygoodchef-video.mp4'


const CardsDisplay = () => {

    const { t } = useTranslation("projectsSection")

    const [toggleExtraCards, setToggleExtraCards] = useState(false)

    const modalData = [
        {
            id: 1,
            title: "Digital Dice",
            image: digitaldice,
            media: digitalDiceVideo,
            text: t('cardDigitalDice'),
            techs: [react, redux, typescript, styledComponents],
            list: ["React", "Redux", "TyoeScript", "Styled-Components", "React-Router-DOM", "Formik", "Yup", "API"],
            api: true,
            github: "https://github.com/oliveira-victor/digital_dice",
            pageLink: "https://digitaldice.vercel.app/"
        },
        {
            id: 2,
            title: "Avatar Maker",
            image: avatarmaker,
            media: avatarMakerVideo,
            text: t('cardAvatarMaker'),
            techs: [react, redux, typescript, styledComponents],
            list: ["React", "Redux", "TypeScript", "Styled-Components", "i18next", "html2canvas"],
            api: false,
            github: "https://github.com/oliveira-victor/avatar_maker",
            pageLink: "https://theavatarmaker.vercel.app/"
        },
        {
            id: 3,
            title: "My Good Chef",
            image: chef,
            media: myGoodChef,
            text: t('cardMyGoodChef'),
            techs: [react, redux, typescript, styledComponents],
            list: ["React", "Redux", "TypeScript", "Styled-Components", "React-Router", "Formik", "Yup", "React Spinner"],
            api: true,
            github: "https://github.com/oliveira-victor/avatar_maker",
            pageLink: "https://mygoodchef.vercel.app/"
        },
        {
            id: 4,
            title: "Mami Moon",
            image: mamimoon,
            media: mamiMoonVideo,
            text: t('cardMamiMoon'),
            techs: [html, javascript, sass, gulp],
            list: ["HTML", "JavaScript", "Sass", "Gulp", "AOS", "Formsubmit"],
            api: false,
            github: "unavailable",
            pageLink: "https://doulamamimoon.com/"
        },
        {
            id: 5,
            title: "VFO Stories",
            image: vfostories,
            media: VFOStoriesVideo,
            text: t('cardVFOstories'),
            techs: [html, javascript, sass, gulp],
            list: ["HTML", "JavaScript", "Sass", "Gulp", "API"],
            api: true,
            github: "https://github.com/oliveira-victor/VFO_stories",
            pageLink: "https://vfostories.vercel.app/"
        },
        {
            id: 6,
            title: "VFO Studio",
            image: vfostudio,
            media: VFOStudioVideo,
            text: t('cardVFOstudio'),
            techs: [html, javascript, sass, gulp],
            list: ["HTML", "JavaScript", "Sass", "Gulp"],
            api: false,
            github: "https://github.com/oliveira-victor/VFO_Studio",
            pageLink: "https://vfostudio.vercel.app/"
        },
        {
            id: 7,
            title: "Guess The Number",
            image: number,
            media: guessTheNumberVideo,
            text: t('cardNumbersGame'),
            techs: [html, css, javascript],
            list: ["HTML", "CSS", "JavaScript"],
            api: false,
            github: "https://github.com/oliveira-victor/guess_the_number",
            pageLink: "https://guessthenumber-game.vercel.app/"
        }
    ]

    return (
        <>
            <div className={styles.mainCardsContainer}>
                <Card
                    link="https://digitaldice.vercel.app/"
                    id="digitaldice"
                    cardTitle="Digital Dice"
                    image={digitaldice}
                    text={t('cardDigitalDice')}
                    api={true}
                    modal={modalData[0]}
                />
                <Card
                    link="https://theavatarmaker.vercel.app/"
                    id="avatarmaker"
                    cardTitle="Avatar Maker"
                    image={avatarmaker}
                    text={t('cardAvatarMaker')}
                    api={false}
                    modal={modalData[1]}
                />
                <Card
                    link="https://mygoodchef.vercel.app/"
                    id="mygoodchef"
                    cardTitle="My Good Chef"
                    image={chef}
                    text={t('cardMyGoodChef')}
                    api={true}
                    modal={modalData[2]}
                />
                <Card
                    link="https://doulamamimoon.com"
                    id="mamimoon"
                    cardTitle="Mami Moon"
                    image={mamimoon}
                    text={t('cardMamiMoon')}
                    api={false}
                    modal={modalData[3]}
                />
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
                {toggleExtraCards ?
                    <>
                        <div className="fadeIn">
                            <Card
                                link="https://vfostories.vercel.app/"
                                id="vfostories"
                                cardTitle="VFO Stories"
                                image={vfostories}
                                text={t('cardVFOstories')}
                                api={true}
                                modal={modalData[4]}
                            />
                        </div>
                        <div className="fadeIn">
                            <Card
                                link="https://vfostudio.vercel.app/"
                                id="vfostudio"
                                cardTitle="VFO Studio"
                                image={vfostudio}
                                text={t('cardVFOstudio')}
                                api={false}
                                modal={modalData[5]}
                            />
                        </div>
                        <div className="fadeIn">
                            <Card
                                link="https://guessthenumber-game.vercel.app/"
                                id="guessthenumber"
                                cardTitle="Guess The Number"
                                image={number}
                                text={t('cardNumbersGame')}
                                api={false}
                                modal={modalData[6]}
                            />
                        </div>
                    </>
                    : ''
                }
            </div>
            {!toggleExtraCards ?
                <div className={styles.loadMoreCards} onClick={() => setToggleExtraCards(true)}><span>{t('loadMoreCards')}</span> <img className="float" src={arrow} alt="Arrow down icon" /></div>
                : ''
            }
        </>
    )
}

export default CardsDisplay
