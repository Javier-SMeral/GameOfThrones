import './styles/main/index.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import CharactersPage from './Pages/CharacterPage/CharacterPage';
import HousesPage from './Pages/HousesPage/HousesPage'
import ChronologyPage from './Pages/ChronologyPage/ChronologyPage';
import { withTranslation } from 'react-i18next';
import DetailsCharacterPage from './components/DetailsCharactersPage/DetailsCharacterPage';
import DetailsHousesPage from './components/DetailsHousesPage/DetailsHousesPage';


function App({ t }) {
  
  return (
    <body className='c__body'>
    
      <Router>

      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/houses" element={<HousesPage />} />
          <Route path="/chronology" element={<ChronologyPage />} />
          <Route path="/characters/:id" element={<DetailsCharacterPage />} />
          <Route path="houses/:id" element={<DetailsHousesPage/>} />
        </Routes>
      </Router>
    </body>
  );
}

export default withTranslation()(App);
