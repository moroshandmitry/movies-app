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
    const [similarMovies, setSimilarMovies] = useState([]);
    const { movieId } = useParams();

    console.log('[movieId]', movieId);

    useEffect(() => {
        const foundMovie = movies.find(({ id }) => id === +movieId);

        // Happy path
        if (foundMovie) return setMovie(foundMovie);

        const movieUrl = `${REACT_APP_API_URL}/movie/${movieId}?api_key=${REACT_APP_MOVIE_API_KEY}`;
        const similarMoviesUrl = `${REACT_APP_API_URL}/movie/${movieId}/similar?api_key=${REACT_APP_MOVIE_API_KEY}`;

        // get movie request
        (async () => {
            try {
                const [movieResponse, similarMoviesResponse] =
                    await Promise.all([
                        await axios.get(movieUrl),
                        await axios.get(similarMoviesUrl)
                    ]);

                const { data: movieDetails } = movieResponse;
                const {
                    data: { results }
                } = similarMoviesResponse;

                console.log('[movieDetails]', movieDetails);
                console.log('[similarMovies => results]', results);

                setMovie(movieDetails);
                setSimilarMovies(results.slice(0, 5));
            } catch (e) {
                console.error(e);
            }
        })();
    }, [movieId, movies]);

    //TODO Add 'Loader' implementation
    // if not have a movie or not have a similar movies
    if (!movie || !similarMovies.length) return null;

    console.log('[similarMovies saved in state]', similarMovies);

    return (
        <Component
            movie={movie}
            similarMovies={similarMovies}
            {...otherProps}
        />
    );
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
