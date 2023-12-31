import React from 'react';
import MenuFoot from '../../components/Menu/MenuFoot';
import { withTranslation } from 'react-i18next';
import MenuHome from '../../components/Menu/MenuHome';

const HomePage = ({ t }) => {

    return (
        <div className='h__title'>
            <MenuHome />
            <div >
                <h1 className='h__game'>{t('game')}</h1>
            </div>
            <MenuFoot />
        </div>

    )
}

export default withTranslation()(HomePage)
