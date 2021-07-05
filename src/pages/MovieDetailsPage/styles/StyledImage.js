import styled from 'styled-components/macro';

const maxWidth = '40rem';
const height = '60rem';

export const StyledImage = styled.img`
    max-width: ${maxWidth};
    height: ${height};
    object-fit: cover;

    @media only screen and (max-width: 1200px) and (max-width: 1500px) {
        min-width: 25rem;
        height: 35rem;
    }

    @media only screen and (min-width: 1000px) and (max-width: 1199px) {
        min-width: 40rem;
        height: 60rem;
    }

    @media only screen and (min-width: 800px) and (max-width: 999px) {
        min-width: 40rem;
        height: 60rem;
    }

    @media only screen and (min-width: 400px) and (max-width: 799px) {
        min-width: 20rem;
        height: 30rem;
    }
`;
