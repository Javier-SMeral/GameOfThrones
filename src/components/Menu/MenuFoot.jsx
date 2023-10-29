import React from 'react'
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const MenuFoot = ({ t }) => {


    return (
        <div className='h__footer'>
            <Link className='h__characters' to="/characters">{t('characters')}</Link>
            <Link className='h__houses' to="/houses">{t('houses')}</Link>
            <Link className='h__chronology' to="/chronology">{t('chronology')}</Link>
        </div>
    )
}

export default withTranslation()(MenuFoot)
