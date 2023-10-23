import React, { useState } from "react";
import { withTranslation } from 'react-i18next';

function FilterHouse({ onSearch, t }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div id="filter">
            <img src="../../../assets/icons8-lupa-30.png" alt="" />
            <input 
                type="text"
                placeholder={t('searchhouse')}
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
}

export default withTranslation()(FilterHouse)