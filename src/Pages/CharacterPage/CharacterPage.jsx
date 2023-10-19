import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharactersPage() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getCharacter = async () => {
            const res = await axios('http://localhost:3000/characters');
            const imageURLs = res.data.map(character => ({
                ...character,
                image: `http://localhost:3000${character.image}`
            }));
            setCharacters(imageURLs);

        }

        getCharacter();
    }, []);

    return (
        <div>
            <h1>Characters Page</h1>
            <div>

                {characters.map((character, i) => (
                    <div key={ i }>
                        <img src={character.image} alt="" style={{ width: '200px' }} />
                        <p>{character.name}</p>
                    </div>
                ))
                    
                }

        </div>
        </div >
    );
}