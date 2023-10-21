import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
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
        <div className="c__characters">
            <div key={character.id} className="c__character">
                <img
                    className="c__character-image"
                    src={`http://localhost:3000${character.image}`}
                    alt={character.name}
                />
                <div className="c__character-info">
                    <h1 className="c__character-name">{character.name}</h1>
                    <div className="c__character-details">
                        <h3><strong>Alliances:</strong> {character.alliances}</h3>
                        <h3><strong>Episodes:</strong> {character.episodes}</h3>
                        <h3><strong>Parents:</strong> {character.parents}</h3>
                        <h3><strong>Siblings:</strong> {character.siblings}</h3>
                        <h3><strong>Titles:</strong> {character.titles}</h3>
                    </div>
                </div>
            </div>
            
        </div>
    );
}