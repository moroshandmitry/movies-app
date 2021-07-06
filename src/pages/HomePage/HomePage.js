import PT from 'prop-types';

import { Link } from '../../components';
import { StyledWrapper, StyledCard } from './styles';

const { REACT_APP_STORAGE_IMAGES_URL } = process.env;

const StubComponent = () => (
    <h1 style={{ color: 'white' }}>
        Please press the button for searching lucky movies, or write you movie
        in input and press button search.
    </h1>
);

export const HomePage = ({ movies }) => (
    <StyledWrapper>
        {movies.length !== 0 ? (
            movies
                .filter(({ poster_path }) => poster_path !== null)
                .map(({ id, original_title, poster_path }) => {
                    const imageUrl =
                        REACT_APP_STORAGE_IMAGES_URL +
                        (poster_path !== null
                            ? poster_path
                            : 'tzve3LD534wsCnhOrSqgJ1mnRma.jpg');

                    return (
                        <StyledCard key={id} $imageUrl={imageUrl}>
                            <Link to={`/movie/${id}`}>{original_title}</Link>
                        </StyledCard>
                    );
                })
        ) : (
            <StubComponent />
        )}
    </StyledWrapper>
);

HomePage.propTypes = {
    /**
     * A list of movies fetched from the BackEnd
     */
    movies: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired,
            original_title: PT.string.isRequired,
            poster_path: PT.string
        })
    ).isRequired
};
