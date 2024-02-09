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

const CardsDisplay = () => {

    const { t } = useTranslation("projectsSection")

    const [toggleExtraCards, setToggleExtraCards] = useState(false)

    return (
        <>
            <div className={styles.mainCardsContainer}>
                <Card
                    link="https://digitaldice.vercel.app/"
                    id="digitaldice"
                    cardTitle="Digital Dice"
                    techs1={react}
                    techs2={redux}
                    techs3={typescript}
                    techs4={styledComponents}
                    text={t('digitalDice')}
                    api={true}
                />
                <Card
                    link="https://theavatarmaker.vercel.app/"
                    id="avatarmaker"
                    cardTitle="Avatar Maker"
                    techs1={react}
                    techs2={styledComponents}
                    text={t('cardAvatarMaker')}
                    api={false}
                />
                <Card
                    link="https://doulamamimoon.com"
                    id="mamimoon"
                    cardTitle="Mami Moon"
                    techs1={html}
                    techs2={javascript}
                    techs3={sass}
                    techs4={gulp}
                    text={t('cardMamiMoon')}
                    api={false}
                />
                <Card
                    link="https://vfostories.vercel.app/"
                    id="vfostories"
                    cardTitle="VFO Stories"
                    techs1={html}
                    techs2={javascript}
                    techs3={sass}
                    techs4={gulp}
                    text={t('cardVFOstories')}
                    api={true}
                />
                {!toggleExtraCards ?
                    <div className={styles.loadMoreCardsMobile}>
                        <div>
                            <button className={styles.loadMoreCardsMobile} onClick={() => setToggleExtraCards(true)}>
                                +
                            </button>
                            <span>More</span>
                        </div>
                    </div>
                    : ''
                }
                {toggleExtraCards ?
                    <>
                        <div className="fadeIn">
                            <Card
                                link="https://vfostudio.vercel.app/"
                                id="vfostudio"
                                cardTitle="VFO Studio"
                                techs1={html}
                                techs2={javascript}
                                techs3={sass}
                                techs4={gulp}
                                text={t('cardVFOstudio')}
                                api={false}
                            />
                        </div>
                        <div className="fadeIn">
                            <Card
                                link="https://guessthenumber-game.vercel.app/"
                                id="guessthenumber"
                                cardTitle="Guess The Number"
                                techs1={html}
                                techs2={css}
                                techs3={javascript}
                                text={t('cardNumbersGame')}
                                api={false}
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
