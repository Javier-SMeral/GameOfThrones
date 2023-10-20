import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'en',
        lng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    greeting: 'Characters',
                    // Más traducciones...
                },
            },
            es: {
                translation: {
                    greeting: '¡Hola, mundo!',
                    // Más traducciones...
                },
            },
        },
    });

export default i18n;