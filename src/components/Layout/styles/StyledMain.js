import styled from 'styled-components/macro';

export const StyledMain = styled.main`
    flex-grow: 1;
    background-color: ${props => props.theme.darkColors[700]};
    margin-top: 7rem;

    @media only screen and (min-width: 1000px) and (max-width: 1200px) {
        margin-top: 10rem;
    }

    @media only screen and (min-width: 300px) and (max-width: 1000px) {
        margin-top: 10rem;
    }
`;
