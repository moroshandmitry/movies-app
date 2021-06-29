import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PT from 'prop-types';
import axios from 'axios';

import { MovieDetailsPage } from '../../pages';

const { REACT_APP_API_URL, REACT_APP_MOVIE_API_KEY } = process.env;

export const MovieDetailsPageContainer = ({
    as: Component = MovieDetailsPage,
    movies,
    ...otherProps
}) => {
    const [movie, setMovie] = useState(null);
    // default :slug
    const { movieId } = useParams();

    useEffect(() => {
        const movie = movies.find(({ id }) => id === +movieId);

        // Happy path
        if (movie) return setMovie(movie);

        const url = `${REACT_APP_API_URL}/movie/${movieId}?api_key=${REACT_APP_MOVIE_API_KEY}`;

        (async () => {
            try {
                const { data } = await axios.get(url);

                console.log('[data]', data);
                setMovie(data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    //TODO Add 'Loader' implementation
    if (!movie) return null;

    return <Component movie={movie} {...otherProps} />;
};

MovieDetailsPageContainer.propTypes = {
    /**
     * Component representation
     */
    as: PT.elementType,
    /**
     * A list of movies fetched from the BackEnd
     */
    movies: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired,
            original_title: PT.string.isRequired,
            poster_path: PT.string,
            backdrop_path: PT.string,
            overview: PT.string.isRequired,
            release_date: PT.string.isRequired
        })
    ).isRequired
};
