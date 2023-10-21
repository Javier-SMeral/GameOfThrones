import React from 'react'
import i18n from '../translate/Translate';

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};

const MenuHead = () => {
    return (

        <div className='h__flag'>

            <img src='../../../assets/spain-1.png' alt='spain' onClick={() => changeLanguage("es")} />
            <img src='../../../assets/united-kingdom-1.png' alt='united kingdom' onClick={() => changeLanguage("en")} />
        </div>

    );
}

export default MenuHead





