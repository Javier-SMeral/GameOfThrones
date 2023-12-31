import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import MenuHead from "../../components/Menu/MenuHead";
import { withTranslation } from 'react-i18next';

function DetailsCharacterPage({ t }) {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    const [house, setHouse] = useState(null); 

    useEffect(() => {
        const getCharacterAndHouse = async () => {
            try {
                const characterResponse = await axios.get(`http://localhost:3000/characters/${id}`);
                setCharacter(characterResponse.data);

                // Filtrar la casa correspondiente al personaje
                const houseResponse = await axios.get(`http://localhost:3000/houses`);
                const matchingHouse = houseResponse.data.find(h => h.name === characterResponse.data.house);
                setHouse(matchingHouse);
            } catch (error) {
                console.error(error);
            }
        };
        getCharacterAndHouse();
    }, [id]);

    if (!character || !house) {
        return <div>Cargando datos o error en la carga.</div>;
    }


    return (

        <div>
        <div id='mh__head'>
            
            <Link className='h__volver' to="/characters">
            <img src="/assets/arrowBack.png" alt="arrow" style={{ width: '30px' }}></img>
            <p>{t('goback')}</p>
            </Link>
            <MenuHead/>
            </div>
            <div className="characters">
                <div className="character">

                    <div className="characters">
                        <div key={character.id} className="character">

                            <img
                                className="character-image"
                                src={`http://localhost:3000${character.image}`}
                                alt={character.name}
                            />
                            <h1 className="character-name">{character.name}</h1>
                        </div>

                        <div className="character-info">
                            <div className="character-details">

                                <div className="ci__house">
                                    <h3>{t('house')}</h3>
                                        {character.house && <img
                                            src={`http://localhost:3000${house.image}`}
                                            alt={house.name}
                                        />}
                                </div>

                                <div className="ci__alliance">
                                    <h3>{t('alliances')}</h3>
                                    <ul>
                                        {character.alliances.map((alliance, index) => (
                                            <li key={index}>{alliance}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="ci__episodes">
                                    <h3>{t('episodes')}</h3>
                                    <ul>
                                        {character.episodes.map((episode, index) => (
                                            <li key={index}>{episode}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="ci__parents">
                                    <h3>{t('parents')}</h3>
                                    <ul>
                                        {character.parents.map((parent, index) => (
                                            <li key={index}>{parent}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="ci__siblings">
                                    <h3>{t('siblings')}</h3>
                                    <ul>
                                        {character.siblings.map((sibling, index) => (
                                            <li key={index}>{sibling}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="ci__titles">
                                    <h3>{t('titles')}</h3>
                                    <ul>
                                        {character.titles.map((title, index) => (
                                            <li key={index}>{title}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(DetailsCharacterPage)