import React from 'react';
import MenuHead from '../../components/Menu/MenuHead';
import MenuFoot from '../../components/Menu/MenuFoot';
import { withTranslation } from 'react-i18next';

const HomePage = ({t}) => {
    return (
        <div className='h__title'>
            <MenuHead />
            <div >
                <h1 className='h__game'>{t('game')}</h1>
            </div>
            <MenuFoot />
        </div>

    )
}

export default withTranslation()(HomePage)
