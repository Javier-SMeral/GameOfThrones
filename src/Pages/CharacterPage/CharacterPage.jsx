
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { withTranslation } from 'react-i18next';
import MenuFoot from "../../components/Menu/MenuFoot";
import MenuHead from "../../components/Menu/MenuHead";

function CharactersPage({ t }) {

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
        <div >
            <MenuHead />
            <h1 className="character_h1">{t('ch_page')}</h1>
            <SimpleBar style={{ maxHeight: 1050, width: '95%' }}>
                <div className="characters_container">
                    {characters.map((character, i) => (
                        <div className="characters_card" key={i}>
                            <Link to={`/character/${character.id}`}>
                                <img src={character.image} alt="" />
                                <div className="character-overlay">
                                    <div className="textOverlay">{character.name}</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </SimpleBar>
            <MenuFoot />
        </div>
    );
}
export default withTranslation()(CharactersPage)