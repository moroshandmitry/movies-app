import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { useDocumentTitle, useAuthenticateUser } from '../../hooks';

const { REACT_APP_API_URL, REACT_APP_MOVIE_API_KEY } = process.env;

export const LayoutContainer = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [movies, setMovies] = useState([]);
    const history = useHistory();
    useDocumentTitle();
    useAuthenticateUser();

    const handleChangeSearch = e => {
        setSearch(e.target.value);
    };

    const handleSearchMovies = async () => {
        setIsSearching(true);

        try {
            // Send request...
            const luckySearch = [
                'City of God',
                'The Matrix',
                'Lion',
                'Bucket',
                'Fire',
                'Collector',
                'Silence',
                'Hannibal',
                'x-men',
                'Superman',
                'Star Wars',
                'Interstellar',
                'Atlantis',
                'Tarzan',
                'Potter',
                'Avengers',
                'Joker',
                'Water',
                'Shadow',
                'GODZILLA',
                'Bad',
                'Batman',
                'marvel',
                'spider man',
                'iron man',
                'Summer',
                'Princess',
                'Eldorado',
                'Illusionist',
                'Earth',
                'Robin Hood',
                'Producers',
                'Kill Bill',
                'Ratatouille',
                'Nemo',
                'Family',
                'The Rescuers',
                'Deaf Man',
                'The Secret',
                'Rooster',
                'Power',
                'Story',
                'Hulk',
                'Thor',
                'The King',
                'Mad Max',
                'Pirates of the Caribbean',
                'Pirates',
                'Oliver Twist',
                'Guardian',
                'Seven',
                'The Fifth Element',
                'The Kid',
                'Rent',
                'Boss',
                'Baby',
                'Dark Knight',
                'Apprentice',
                'Little',
                'Fight Club',
                'Sherlock',
                'Fiction',
                'Incredible',
                'Karate',
                'Paris',
                'Men in Black',
                'Hotel Transylvania',
                'Maleficent',
                'Sword',
                'Black',
                'Central',
                'Park',
                'Great',
                'League',
                'Purgatory',
                'Matador',
                'Lord of the Rings',
                'Chronicles',
                'Golden Compass',
                'Liar',
                'Forrest Gump',
                'Inside Out',
                'Despicable Me',
                'Home',
                'Guarding Tess',
                'People',
                'Universe',
                'Cloud Atlas',
                'Hellboy',
                'Monk',
                'xXx',
                'Pearl',
                'Hidalgo',
                'Priest',
                'Cool',
                'Minion',
                'Jumanji',
                'Hook',
                'Murder',
                'Sleepless',
                'Big',
                'Snatch',
                'Christmas',
                'Beetlejuice',
                'Sleepy Hollow',
                'Catch',
                'Titans',
                'Independence',
                'Inception',
                'Kingdom'
            ];

            const luckySearchIndex = Math.floor(Math.random() * 100);

            const url = `${REACT_APP_API_URL}/search/movie?api_key=${REACT_APP_MOVIE_API_KEY}&query=${
                !search ? luckySearch[luckySearchIndex] : search
            }`;

            const {
                data: { results }
            } = await axios.get(url);

            setSearch('');
            setMovies(results);
            setIsSearching(false);

            // redirect with history object on home page (react-router-dom)
            history.push('/');
        } catch (e) {
            console.error('[e]', e);
        }
    };

    return children({
        search,
        isSearching,
        movies,
        onChangeSearch: handleChangeSearch,
        onSearchMovies: handleSearchMovies
    });
};
