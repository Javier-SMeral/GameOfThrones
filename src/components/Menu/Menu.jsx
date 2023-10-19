import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/houses">Houses</Link>
            <Link to="/chronology">chronology</Link>
        </header>
    );
}