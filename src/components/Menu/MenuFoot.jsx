import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import "./menuFooter.css"

const MenuFoot = ({ t }) => {
    const location = useLocation();

//HE CREADO OTRA CLASE DENTRO DE LINK PARA PODER HACER EL UNDERLINE.
    return (
        <div className='h__footer'>
            <Link className={`button ${location.pathname === '/characters' ? 'active' : ''}`} to="/characters">{t('characters')}</Link>
            <Link className={`button ${location.pathname === '/houses' ? 'active' : ''}`} to="/houses">{t('houses')}</Link>
            <Link className={`button ${location.pathname === '/chronology' ? 'active' : ''}`} to="/chronology">{t('chronology')}</Link>
        </div>
    )
}

export default withTranslation()(MenuFoot)
