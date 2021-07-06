import styled from 'styled-components/macro';

export const StyledWidthLimiter = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: ${props => props.theme.maxWidth};

    @media only screen and (min-width: 1000px) and (max-width: 1200px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }

    @media only screen and (min-width: 300px) and (max-width: 1000px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
`;
