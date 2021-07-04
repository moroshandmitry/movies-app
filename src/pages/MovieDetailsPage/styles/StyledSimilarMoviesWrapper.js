import styled from 'styled-components/macro';

import { StyledLink } from '../../../components/Link';

export const StyledSimilarMoviesWrapper = styled.div`
    display: flex;
    margin-top: ${props => props.theme.margin.md};
    position: relative;
    z-index: 1;

    ${StyledLink} {
        &:hover,
        &:focus {
            outline: 0.3rem solid ${props => props.theme.lightColors[500]};
            outline-offset: 0.3rem;
        }

        &:not(:last-child) {
            margin-right: ${props => props.theme.margin.md};
        }
    }

    @media only screen and (max-width: 1500px) {
        flex-direction: column;
        gap: ${props => props.theme.padding.xl};
    }

    @media only screen and (min-width: 1000px) and (max-width: 1500px) {
        flex-direction: column;
        gap: ${props => props.theme.padding.xl};
    }

    @media only screen and (min-width: 400px) and (max-width: 1000px) {
        flex-direction: column;
        gap: ${props => props.theme.padding.xl};
    }
`;
