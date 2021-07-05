import PT from 'prop-types';

import { Link } from '../../components';
import { StyledWrapper, StyledCard } from './styles';

const { REACT_APP_STORAGE_IMAGES_URL } = process.env;

export const HomePage = ({ movies }) => (
    <StyledWrapper>
        {movies
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
            })}
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
