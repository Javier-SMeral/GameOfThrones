import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";


export default function DetailsCharacterPage() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const getCharacter = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/characters/${id}`);
                setCharacter(data);
            } catch (error) {
                console.error(error);
            }
        };
        getCharacter();
    }, [id]);

    const [houses, setHouses] = useState();

    useEffect(() => {
        const getHouses = async () => {
            const res = await axios(`http://localhost:3000/houses/`);
            const imageURLs = res.data.map(houses => ({
                ...houses,
                image: `http://localhost:3000${houses.image}`
            }));
            setHouses(imageURLs);
        };
    
        getHouses(); 
    }, []);
    
    useEffect(() => {
        console.log(houses);
    }, [houses]);
    
    if (!character || !houses) {
        return <div>Cargando datos o error en la carga.</div>;
    }

    return (

        <div>
            <div ClassName="h__volver">
                <Link className='h__volver' to="/characters">
                    <img ClassName="detail__img" src="/assets/arrowBack.png" alt="arrow" style={{ width: '30px' }}></img>
                    <p>Vuelve</p>
                </Link>
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
                                    <h3>House: </h3>
                                        {character.house && <img
                                            src={`http://localhost:3000${houses.image}`}
                                            alt={houses.name}
                                        />}
                                </div>

                                <div className="ci__alliance">
                                    <h3>Alliances: </h3>
                                    <ul>
                                        {character.alliances.map((alliance, index) => (
                                            <li key={index}>{alliance}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="ci__episodes">
                                    <h3>Episodes: </h3>
                                    <ul>
                                        {character.episodes.map((episode, index) => (
                                            <li key={index}>{episode}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="ci__parents">
                                    <h3>Parents: </h3>
                                    <ul>
                                        {character.parents.map((parent, index) => (
                                            <li key={index}>{parent}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="ci__siblings">
                                    <h3>Siblings: </h3>
                                    <ul>
                                        {character.siblings.map((sibling, index) => (
                                            <li key={index}>{sibling}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="ci__titles">
                                    <h3>Titles: </h3>
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
