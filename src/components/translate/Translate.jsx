import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            'home': 'home',
            'characters': 'characters',
            'houses': 'HOUSES',
            'chronology': 'CHRONOLOGY',
            'game': 'GAME OF THRONES',
            'ch_page': 'Character Page'
        }
    },
    es: {
        translation: {
            'home': 'INICIO',
            'characters': 'PERSONAJES',
            'houses': 'CASAS',
            'chronology': 'CRONOLOGIA',
            'game': 'JUEGO DE TRONOS',
            'ch_page': 'Pagina de Personajes'
        }
    },
}
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es',
        fallbackLng: 'en',
    });


export default i18n;