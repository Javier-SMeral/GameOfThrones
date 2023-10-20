import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='h__title'>
            <div className='h__flag'>
                <img src='../../../assets/spain-1.png' alt='spain' />
                {/* <button className='h__spain' /><button /> */}
                <img src='../../../assets/united-kingdom-1.png' alt='united kingdom' />
                {/* <button className='h__uk' /><button /> */}
            </div>
            <h1 className='h__game'>GAME OF THRONES</h1>
            {/* <img className='h__img' src='../../../assets/Game-of-Thrones-Logo.png' alt='Game of thrones' /> */}
            <div className='h__footer'>
                {/* <Link className='h__home' to="/">Home</Link> */}
                <Link className='h__characters' to="/characters">Characters</Link>
                <Link className='h__houses' to="/houses">Houses</Link>
                <Link className='h__chronology' to="/chronology">chronology</Link>
            </div>
        </div>
    )
}

export default HomePage