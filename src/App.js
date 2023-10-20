import "./styles/main/index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import CharactersPage from "./Pages/CharacterPage/CharacterPage";
import HousesPage from "./Pages/HousesPage/HousesPage";
import ChronologyPage from "./Pages/ChronologyPage/ChronologyPage";
import Menu from "./components/Menu/Menu";


function App() {
  return (
    <body className="c__body">
      <header className="c__header">
        <Router>
          <div className="App">
            <div className="App-header">
              <Menu />

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/houses" element={<HousesPage />} />
                <Route path="/chronology" element={<ChronologyPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </header>
      <main className="c__main"></main>
      <footer className="c__footer"></footer>
    </body>
  );
}

export default App;
