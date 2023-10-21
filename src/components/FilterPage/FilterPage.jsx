import React, { useState } from "react";

export default function FilterPage({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <input ClassName="filter"
            type="text"
            placeholder="Buscar personajes..."
            value={searchTerm}
            onChange={handleSearch}
        />
    );
}