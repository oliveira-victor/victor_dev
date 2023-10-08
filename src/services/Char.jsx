import styles from './Services.module.css'

import runningChar from './assets/runningChar.gif'

const Char = (props) => {

    const { tech, distance } = props;

    return (
        <div className={`${styles.char} running`} style={{marginLeft: `${distance}`}} >
            <div className={styles.charUp}>
                <img src={tech} alt="Tech icon" />
            </div>
            <div className={styles.charDown}>
                <img className={styles.runningChar} src={runningChar} alt="" />
            </div>
        </div>
    )
}

export default Char