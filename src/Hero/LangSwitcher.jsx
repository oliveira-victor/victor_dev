import styles from './Hero.module.css'

import ptbr from './assets/ptbr.svg'
import en from './assets/en.svg'
import { useTranslation } from 'react-i18next'

const LangSwitcher = () => {

    const [ t, i18n ] = useTranslation("translation");

    const handleChangeLang = (lang) => {
        i18n.changeLanguage(lang);
        console.log(i18n.language)
    }

    return (
        <div
            className={`${styles.langSwitcher} fadeIn2`}
            onClick={i18n.language === 'ptBR' ? () => handleChangeLang("en") :  () => handleChangeLang("ptBR")}
        >
            <img src={i18n.language === 'ptBR' ? en : ptbr} alt="Flag icon" />
            {t('langSwitch')}
        </div>
    )
}

export default LangSwitcher