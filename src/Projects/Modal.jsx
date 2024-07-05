import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Modal.module.css'

import close from '../assets/close.svg'
import api from '../assets/api.svg'
import groupIcon from '../assets/group-icon.svg'

const Modal = ({ closeModal, modalData }) => {

    const { t } = useTranslation("projectsSection")

    const [tab, setTab] = useState(1)

    return (
        <div className={`${styles.modal} fastFadeIn`}>
            <div className={styles.overlay} onClick={closeModal}></div>
            <div className={styles.modalContainer}>
                <div className={styles.modalCover} style={{ backgroundImage: `url(${modalData.image})` }}>
                    <img src={close} alt="Close icon" onClick={closeModal} />
                    <div className={styles.modalTitle}>
                        <h3>{modalData.title}</h3>
                    </div>
                </div>
                <div className={styles.modalContent}>
                    <div className={styles.upContainer}>
                        <aside>
                            <button type='button' className={tab === 1 ? styles.selectedButton : styles.unselectedButton} onClick={() => setTab(1)}>{t('modalTab1')}</button>
                            <button type='button' className={tab === 2 ? styles.selectedButton : styles.unselectedButton} onClick={() => setTab(2)}>{t('modalTab2')}</button>
                        </aside>
                        <div className={styles.mainContainer}>
                            {tab === 1 && (
                                <div className={styles.mediaContainer}>
                                    <video width="100%" controls>
                                        <source src={modalData.media} type="video/mp4" />
                                    </video>
                                </div>
                            )}

                            {tab === 2 && (
                                <div className={styles.detailsTab}>
                                    {modalData.team && <img className={styles.temWorkModal} src={groupIcon} alt="Team work" />}
                                    <p>
                                        {modalData.text}
                                    </p>
                                    <p>
                                        <strong>{t('listTitle')}</strong>
                                    </p>
                                    <ul>
                                        {modalData.list.map((item) => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.bottomContainer}>
                        <div>
                            {modalData.techs.map((tech) => (
                                <img key={tech} src={tech} />
                            ))}
                            {modalData.api && <img src={api} alt="API" />}
                        </div>
                        <div className={styles.btnContainer}>
                            {modalData.github === null ? (
                                <button type='button' className={styles.offBtn}>{t('codeBtn')}</button>
                            ) : (
                                <a href={modalData.github} target='_blank'>
                                    <button className={styles.codeBtn} type='button'>{t('codeBtn')}</button>
                                </a>
                            )}
                            <a href={modalData.pageLink} target='_blank'>
                                <button className={styles.siteBtn} type='button'>{t('siteBtn')}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal