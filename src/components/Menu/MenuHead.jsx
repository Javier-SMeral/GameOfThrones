import React from 'react'
import i18n from '../translate/Translate';
import { Link } from 'react-router-dom';

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};

const MenuHead = () => {
    return (
        <div className='h__flag'>
            <Link id='h__home' to="/">{<img src='../../../assets/home.png' alt='home' />}</Link>
            <img src='../../../assets/spain-1.png' alt='spain' onClick={() => changeLanguage("es")} />
            <img src='../../../assets/united-kingdom-1.png' alt='united kingdom' onClick={() => changeLanguage("en")} />
        </div>

    );
}

export default MenuHead





