import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import MenuHead from "../Menu/MenuHead";
import { withTranslation } from 'react-i18next';

function DetailsHousesPage({ t }) {
    const { id } = useParams();
    const [house, setHouse] = useState(null); 

    useEffect(() => {
        const getHouse = async () => {
            try {
                const houseResponse = await axios.get(`http://localhost:3000/houses/${id}`);
                setHouse(houseResponse.data);

            } catch (error) {
                console.error(error);
            }
        };
        getHouse();
    }, [id]);

    if (!house) {
        return <div>Cargando datos o error en la carga.</div>;
    }


    return (

        <div>
        <div id='mh__head'>
            
            <Link className='h__volver' to="/houses">
            <img src="/assets/arrowBack.png" alt="arrow" style={{ width: '30px' }}></img>
            <p>{t('goback')}</p>
            </Link>
            <MenuHead/>
            </div>
            <div className="houses">
                <div className="house">

                    <div className="houses">
                        <div key={house.id} className="house">
                            <img
                                className="house-image"
                                src={`http://localhost:3000${house.image}`}
                                alt={house.name}
                            />
                            <h1 className="house-name">{house.name}</h1>
                        </div>

                        <div className="house-info">
                            <div className="house-details">

                                <div className="house__settlement">
                                    <h3>{t('settlement')}</h3>
                                    <p>{house.settlement}</p>
                                </div>

                                <div className="house__region">
                                    <h3>{t('region')}</h3>
                                    <p>{house.region}</p>
                                </div>
                                
                                <div className="house__alliances">
                                    <h3>{t('alliances')}</h3>
                                    <p>
                                        {house.alliances.map((alliance, index) => (
                                            <li key={index}>{alliance}</li>
                                        ))}
                                    </p>
                                </div>
                                
                                <div className="house__religions">
                                    <h3>{t('religions')}</h3>
                                    <p>
                                        {house.religions.map((religion, index) => (
                                            <li key={index}>{religion}</li>
                                        ))}
                                    </p>
                                </div>

                                <div className="house__foundation">
                                    <h3>{t('foundation')}</h3>
                                    <p>{house.foundation}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(DetailsHousesPage)