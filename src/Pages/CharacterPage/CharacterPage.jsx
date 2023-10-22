import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import FilterPage from "../../components/FilterPage/FilterPage";
import { withTranslation } from 'react-i18next';
import MenuFoot from "../../components/Menu/MenuFoot";
import MenuHead from "../../components/Menu/MenuHead";


function CharactersPage({ t }) {

    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() => {
        const getCharacter = async () => {
            const res = await axios('http://localhost:3000/characters');
            const imageURLs = res.data.map(character => ({
                ...character,
                image: `http://localhost:3000${character.image}`
            }));
            setCharacters(imageURLs);
            setFilteredCharacters(imageURLs);

        }

        getCharacter();
        
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = characters.filter((character) => character.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setFilteredCharacters(filtered);
    }

    return (

        <div >

                    
            <div ClassName = "h__volver">
            
                
                <MenuHead />
            </div>
            
            <h1 className="character_h1">{t('ch_page')}</h1>
            <FilterPage onSearch={handleSearch} />
            <SimpleBar style={{ maxHeight: 650, width: '90%' }}>
            
                <div className="characters_container">
                {filteredCharacters.map((character, i) => (
                        <div className="characters_card" key={i}>
                            <Link to={`/characters/${character.id}`}>
                                <img ClassName="img__grad" src={character.image} alt="" />
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