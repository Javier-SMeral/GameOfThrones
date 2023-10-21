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
            setHouses(res.data);
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
<<<<<<< HEAD
        <div >
            <div ClassName = "h__volver">
                <Link className='h__volver' to="/characters">
                <img ClassName="detail__img" src="/assets/arrowBack.png" alt="arrow" style={{ width: '30px' }}></img>
                <p>Vuelve</p>
                </Link>
            </div>

        <div className="characters">
            <div className="character">
=======
        <div className="c__characters">
            <div key={character.id} className="c__character">
>>>>>>> 1df835e685a7f43b9924ff979630938cba74c78f
                <img
                    className="c__character-image"
                    src={`http://localhost:3000${character.image}`}
                    alt={character.name}
                />
<<<<<<< HEAD
                <h1 className="character-name">{character.name}</h1>
            </div>

                <div className="character-info">
                    <div className="character-details">

                    <div className="ci__house">
                        <h3>House: </h3>
                        <ul>
                            {character.house && <img
                                src={`http://localhost:3000${houses.image}`}
                                alt={houses.name}
                                
                                />}
                        </ul>
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
                    
=======
                <div className="c__character-info">
                    <h1 className="c__character-name">{character.name}</h1>
                    <div className="c__character-details">
                        <h3><strong>Alliances:</strong> {character.alliances}</h3>
                        <h3><strong>Episodes:</strong> {character.episodes}</h3>
                        <h3><strong>Parents:</strong> {character.parents}</h3>
                        <h3><strong>Siblings:</strong> {character.siblings}</h3>
                        <h3><strong>Titles:</strong> {character.titles}</h3>
>>>>>>> 1df835e685a7f43b9924ff979630938cba74c78f
                    </div>
                </div>
            </div>
            
        </div>
    );
}