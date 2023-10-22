import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import MenuFoot from "../../components/Menu/MenuFoot";
import MenuHead from "../../components/Menu/MenuHead";

function HousesPage({ t }) {
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
            <MenuHead />
            <div className="houses_container">
                <SimpleBar style={{ maxHeight: 700, width: "80%" }}>
                    <div className="house_cards">
                        {houses.map((house, i) => (
                            <div className="house_card" key={i}>
                                <Link to={`/houses/${house.id}`}>
                                    <img className="house_banner" src={house.image} alt="" style={{ width: "70%" }} />
                                    <p>{house.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </SimpleBar>
            </div>
            <MenuFoot />
        </div>
    )
}
export default HousesPage