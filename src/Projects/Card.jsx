import styles from "./Projects.module.css"
import './cardsImgs.css'

function Card(props) {

    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <div className={styles.card__img} id={props.id}>
                        <div className={styles.card__techs}>
                            <img src={props.techs1} />
                            <img src={props.techs2} />
                            <img src={props.techs3} />
                            <img src={props.techs4} />
                            <img src={props.techs5} />
                        </div>
                    </div>
                    <div className={styles.card__content}>
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