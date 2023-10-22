import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function DetailsHousePage() {
    const { id } = useParams();
    const [character, setHouse] = useState(null);

    useEffect(() => {
        const getHouse = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/characters/${id}`);
                setHouse(data);
            } catch (error) {
                console.error(error);
            }
        };
        getHouse();
    }, [id]);