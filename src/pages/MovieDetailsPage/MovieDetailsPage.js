import PT from 'prop-types';

import { Button } from '../../components';
import {
    StyledWrapper,
    StyledDetails,
    StyledImage,
    StyledImageWrapper,
    StyledInfoWrapper,
    StyledInfo,
    StyledTitle,
    StyledReleaseDate
} from './styles';

// /movie/{movie_id}

const { REACT_APP_STORAGE_IMAGES_URL } = process.env;

export const MovieDetailsPage = ({ movie }) => {
    const {
        backdrop_path,
        poster_path,
        original_title,
        release_date,
        overview
    } = movie;

    const backdropUrl = REACT_APP_STORAGE_IMAGES_URL + backdrop_path;
    const posterUrl = REACT_APP_STORAGE_IMAGES_URL + poster_path;

    return (
        <StyledWrapper>
            <StyledDetails $imageUrl={backdropUrl}>
                <StyledImageWrapper>
                    <StyledImage src={posterUrl} alt={original_title} />
                </StyledImageWrapper>

                <StyledInfoWrapper>
                    <StyledInfo>
                        <StyledTitle>{original_title}</StyledTitle>
                        <StyledReleaseDate>{release_date}</StyledReleaseDate>
                        <p>{overview}</p>
                    </StyledInfo>
                    <Button>Add to Favorite</Button>
                </StyledInfoWrapper>
            </StyledDetails>
        </StyledWrapper>
    );
};

MovieDetailsPage.propTypes = {
    /**
     * A particular movie details
     */
    movie: PT.shape({
        id: PT.number.isRequired,
        original_title: PT.string.isRequired,
        poster_path: PT.string,
        backdrop_path: PT.string,
        overview: PT.string.isRequired,
        release_date: PT.string.isRequired
    }).isRequired
};

// popularity: 360.116, poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", release_date: "2018-04-25", … }
// adult: false
// backdrop_path: "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg"
// genre_ids: Array(3) [ 12, 28, 878 ]
// id: 299536
// original_language: "en"
// original_title: "Avengers: Infinity War"
// overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain."
// popularity: 360.116
// poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
// release_date: "2018-04-25"
// title: "Avengers: Infinity War"
// video: false
// vote_average: 8.3
// vote_count: 22057