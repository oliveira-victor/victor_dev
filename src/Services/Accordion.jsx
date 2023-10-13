import { useState } from 'react'
import styles from './Services.module.css'

import arrow from './assets/arrow.svg'

const Accordion = (props) => {

    const { question, answer } = props;
    const [activeAccordion, setActiveAccordion] = useState(false);

    const accordionHandler = () => {
        setActiveAccordion(!activeAccordion);
    }

    return (
        <div className={styles.accordionBox}>
            <div className={styles.question} onClick={accordionHandler}>
                {question}
                <img src={arrow} alt="Arrow icon" className={activeAccordion && "upsideDown"} />
            </div>
            {activeAccordion &&
                <div className={styles.answer}>
                    <p>{answer}</p>
                </div>
            }
        </div>
    )
}

export default Accordion