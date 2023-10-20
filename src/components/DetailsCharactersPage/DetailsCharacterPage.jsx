import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
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

    if (!character) {
        // Muestra un mensaje de carga o error si los datos aún no se han cargado
        return <div>Cargando datos o error en la carga.</div>;
    }

    return (
        <div className="characters">
            <div key={character.id} className="character">
                <img
                    className="character-image"
                    src={`http://localhost:3000${character.image}`}
                    alt={character.name}
                />
                <div className="character-info">
                    <h1 className="character-name">{character.name}</h1>
                    <div className="character-details">
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

