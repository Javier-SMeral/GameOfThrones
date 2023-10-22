import React, { useEffect, useState } from "react";
import axios from 'axios';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Link } from 'react-router-dom';

export default function HousesPage() {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const getHouses = async () => {
            const res = await axios('http://localhost:3000/houses');
            const imageURLs = res.data.map(house => ({
                ...house,
                image: `http://localhost:3000${house.image}`
            }));
            setHouses(imageURLs);
        }

        getHouses();
    }, []);

    return (
        <div>
            <div className='h__flag'>
                <img src='../../../assets/spain-1.png' alt='spain' />
                {/* <button className='h__spain' /><button /> */}
                <img src='../../../assets/united-kingdom-1.png' alt='united kingdom' />
                {/* <button className='h__uk' /><button /> */}
            </div>
            <div className="houses_container">
                <SimpleBar style={{ maxHeight: 525, width: "80%" }}>
                    <div className="house_cards">
                        {houses.map((house, i) => (
                            <div className="house_card" key={i}>
                                <img className="house_banner" src={house.image} alt="" style={{ width: "70%" }} />
                                <p>{house.name}</p>
                            </div>
                        ))}
                    </div>
                </SimpleBar>
            </div>
            <div className='h__footer'>
                {/* <Link className='h__home' to="/">Home</Link> */}
                <Link className='h__characters' to="/characters">Characters</Link>
                <Link className='h__houses' to="/houses">Houses</Link>
                <Link className='h__chronology' to="/chronology">chronology</Link>
            </div>
        </div>
    )
}
