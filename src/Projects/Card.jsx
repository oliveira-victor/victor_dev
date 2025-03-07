import { useRef, useEffect, useState } from "react"

import Modal from "./Modal"

import styles from "./Projects.module.css"
import './cardsImgs.css'

import linkIcon from '../assets/link-icon.svg'
import apiIcon from '../assets/api.svg'
import groupIcon from '../assets/group-icon.svg'

function Card(props) {

    const { cardTitle, image, ico, text, api, modal, team } = props

    let [cardIsVisible, setCardIsVisible] = useState()

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const cardRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting === true) {
                setCardIsVisible(true)

            } else {
                setCardIsVisible(false)
            }
        }, { threshold: [1] })
        observer.observe(cardRef.current)
    }, [])

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <>
            {modalIsOpen && <Modal closeModal={closeModal} modalData={modal} />}
            <div ref={cardRef} className={styles.card_container} onClick={() => setModalIsOpen(true)}>
                <div className={`${styles.card} ${cardIsVisible && screen.availWidth < 1024 ? styles.move_card : ''}`}>
                    <div className={styles.card__img} style={{ backgroundImage: `url(${image})` }}>
                        <div className={styles.card__techs}>
                            {ico.icons.map((item, index) => (
                                <div key={index} className={styles.techContainer}>
                                    <span className={`${styles.techTitle} fastFadeIn`}>{ico.titles[index]}</span>
                                    <img src={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.card__content} ${cardIsVisible && screen.availWidth < 1024 ? styles.moveCardContent : ''}`}>
                        <div className={styles.card__content__wrapper}>
                            <h3>- {cardTitle} -</h3>
                            <p>
                                {text}
                            </p>
                            <div className={styles.bottom}>
                                <div className={styles.leftIcons}>
                                    {api ? <img className={styles.apiBtn} src={apiIcon} /> : <span></span>}
                                    {team ? <img className={styles.teamBtn} src={groupIcon} /> : <span></span>}
                                </div>
                                <img src={linkIcon} className={styles.linkIcon} alt="Link icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
