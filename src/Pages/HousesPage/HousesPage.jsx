import React, { useEffect, useState } from "react";
import axios from 'axios';

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
            <h1>Houses Page</h1>
            <div className="HouseGallery">
                {houses.map((house, i) => (
                    <div className="HouseCard" key={i}>
                        <img src={house.image} alt="" style={{ width: '248px' }} />
                        <p>{house.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}