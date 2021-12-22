import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import { ApiService } from './APIService/ApiService';
import { SpeciesContainer } from './components/Species';
import { FilmController } from './controllers/filmController';
const PAGE_LOWER_LIMIT = 1;

function App() {
    const [species, setSpecies] = useState([]);
    const [page, setPage] = useState(1);
    const filmController = useRef(new FilmController()).current;

    useEffect(() => {
        getSpecies(page);
        filmController.getParsedFilms();
    }, []);

    useEffect(() => {
        getSpecies(page);
    }, [page]);

    function getSpecies(nextPage) {
        ApiService.getSpeciesByPage(nextPage).then((data) => {
            setSpecies(data.results);
        });
    }

    function onNextClick() {
        setPage(page + 1);
    }

    function onPrevClick() {
        const prevPage = page - 1;

        if (prevPage >= PAGE_LOWER_LIMIT) {
            setPage(prevPage);
        }
    }

    return (
        <div className='App'>
            <div className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <SpeciesContainer species={species} />
                <div>
                    <button onClick={onPrevClick}>Prev</button>
                    <button onClick={onNextClick}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default App;
