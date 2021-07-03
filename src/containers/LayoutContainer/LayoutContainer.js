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
                'The Matrix',
                'Lion',
                'Bucket',
                'Fire',
                'Collector',
                'Silence',
                'Hannibal',
                'x-men',
                'Superman',
                'Atlantis',
                'Tarzan',
                'Potter',
                'Avengers',
                'Batman',
                'marvel',
                'spider man',
                'iron man',
                'Ponyo',
                'Princess',
                'Eldorado',
                'Illusionist',
                'Robin Hood',
                'Producers',
                'Kill Bill',
                'Ratatouille',
                'Finding Nemo',
                'Family',
                'The Rescuers',
                'Deaf Man',
                'The Secret',
                'Rooster',
                'Hulk',
                'Thor',
                'The King',
                'Mad Max',
                'Pirates of the Caribbean',
                'Oliver Twist',
                'Guardian',
                'Seven',
                'The Fifth Element',
                'The Kid',
                'Rent',
                'Apprentice',
                'Little',
                'Sherlock Holmes',
                'Pulp Fiction',
                'Incredible',
                'The Karate Kid',
                'From Paris With Love',
                'Men in Black',
                'Hotel Transylvania',
                'Maleficent',
                'The Sword in the Stone',
                'The Black Cauldron',
                'Central Park',
                'The Great',
                'The League',
                'Purgatory',
                'The Matador',
                'The Lord of the Rings',
                'The Chronicles',
                'The Golden Compass',
                'Liar Liar',
                'Forrest Gump',
                'Inside Out',
                'Despicable Me',
                'Home',
                'Guarding Tess',
                'People',
                'Universe',
                'Cloud Atlas',
                'Hellboy',
                'Bulletproof Monk',
                'xXx',
                'Pearl Harbor',
                'Hidalgo',
                'Priest',
                'Cool Runnings',
                'Minion',
                'Jumanji',
                'Hook',
                'Murder',
                'Sleepless',
                'My Big Fat',
                'Snatch',
                'Fight Club',
                'Christmas',
                'Beetlejuice',
                'Sleepy Hollow',
                'Catch Me If You Can',
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
