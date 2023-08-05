import { useRef, useEffect, useState } from "react"

import styles from "./Projects.module.css"
import './cardsImgs.css'

function Card(props) {

    let [cardIsVisible, setCardIsVisible] = useState()

    const cardRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting === true) {
                setCardIsVisible(cardIsVisible = true)
                console.log("abre card")

            } else {
                setCardIsVisible(cardIsVisible = false)
                console.log("fecha card")
            }
        }, { threshold: [1] })
        observer.observe(cardRef.current)
    }, [])

    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            <div ref={cardRef} className={styles.card_container}>
                <div className={`${styles.card} ${cardIsVisible && screen.availWidth < 1024 ? styles.move_card : ''}`}>
                    <div className={styles.card__img} id={props.id}>
                        <div className={styles.card__techs}>
                            <img src={props.techs1} />
                            <img src={props.techs2} />
                            <img src={props.techs3} />
                            <img src={props.techs4} />
                            <img src={props.techs5} />
                        </div>
                    </div>
                    <div className={`${styles.card__content} ${cardIsVisible && screen.availWidth < 1024 ? styles.moveCardContent : ''}`}>
                        <div className={styles.card__content__wrapper}>
                            <h3>{props.cardTitle}</h3>
                            <p>
                                {props.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Card