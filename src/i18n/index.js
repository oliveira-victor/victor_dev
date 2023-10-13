import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from './translations/en.json'
import ptBRJson from './translations/ptBR.json'

export let activeLang = "en"

const detectLang = () => {
    navigator.language === "pt-BR" ? activeLang = "ptBR" : activeLang = "en"
}

detectLang()

i18next.use(initReactI18next).init({
    fallbackLng: activeLang,
    interpolation: {
        escapeValue: false
    }, 
    resources: {
        en: enJson,
        ptBR: ptBRJson,
    },
})