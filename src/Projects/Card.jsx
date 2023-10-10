import { useRef, useEffect, useState } from "react"

import styles from "./Projects.module.css"
import './cardsImgs.css'

function Card(props) {

    const { link, id, techs1, techs2, techs3, techs4, techs5, cardTitle, text } = props
    let [cardIsVisible, setCardIsVisible] = useState()

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

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div ref={cardRef} className={styles.card_container}>
                <div className={`${styles.card} ${cardIsVisible && screen.availWidth < 1024 ? styles.move_card : ''}`}>
                    <div className={styles.card__img} id={id}>
                        <div className={styles.card__techs}>
                            <img src={techs1} />
                            <img src={techs2} />
                            <img src={techs3} />
                            <img src={techs4} />
                            <img src={techs5} />
                        </div>
                    </div>
                    <div className={`${styles.card__content} ${cardIsVisible && screen.availWidth < 1024 ? styles.moveCardContent : ''}`}>
                        <div className={styles.card__content__wrapper}>
                            <h3>{cardTitle}</h3>
                            <p>
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Card