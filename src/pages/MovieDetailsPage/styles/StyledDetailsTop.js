import styled from 'styled-components/macro';

export const StyledDetailsTop = styled.div`
    display: flex;

    @media only screen and (max-width: 1500px) {
        flex-direction: column;
    }

    @media only screen and (min-width: 1000px) and (max-width: 1500px) {
        flex-direction: column;
    }

    @media only screen and (min-width: 400px) and (max-width: 1000px) {
        flex-direction: column;
    }
`;
