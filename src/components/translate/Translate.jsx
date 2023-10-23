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
            'ch_page': 'Character Page',
            'search': 'Search Character',
            'searchhouse': 'Search House',
            'settlement': 'settlement',
            'region': 'region',
            'alliances':'alliances',
            'religions':'religions',
            'foundation':'foundation',
            'goback': 'Go Back',
            'house': 'house',
            'episodes': 'episodes',
            'parents': 'parents',
            'siblings': 'siblings',
            'titles': 'titles'

        }
    },
    es: {
        translation: {
            'home': 'INICIO',
            'characters': 'PERSONAJES',
            'houses': 'CASAS',
            'chronology': 'CRONOLOGIA',
            'game': 'JUEGO DE TRONOS',
            'ch_page': 'Pagina de Personajes',
            'search': 'Buscar Personaje',
            'searchhouse': 'Buscar Casa',
            'settlement': 'sede',
            'region': 'region',
            'alliances':'alianzas',
            'religions':'religiones',
            'foundation':'fundacion',
            'goback': 'Volver',
            'house': 'casa',
            'episodes': 'episodios',
            'parents': 'padres',
            'siblings': 'hermanos/as',
            'titles': 'titulos'
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