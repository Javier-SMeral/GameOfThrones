import React, { useState } from "react";
import { withTranslation } from 'react-i18next';

function FilterPage({ onSearch, t }) {
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
                placeholder={t('search')}
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
}

export default withTranslation()(FilterPage)