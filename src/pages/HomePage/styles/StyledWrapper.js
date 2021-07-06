import styled from 'styled-components/macro';

const cardHeight = '75rem';

export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: ${cardHeight};
    gap: ${props => props.theme.padding.sm};
    padding: ${props => props.theme.padding.sm};
    grid-auto-columns: max-content;
    width: 100%;

    @media only screen and (max-width: 1500px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 25rem;
        margin: 0 auto;
        width: 100%;
    }

    @media only screen and (min-width: 1000px) and (max-width: 1500px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 60rem;
        margin: 0 auto;
        width: 100%;
    }

    @media only screen and (min-width: 400px) and (max-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        margin: 0 auto;
        width: 100%;
        grid-auto-rows: 50rem;
    }
`;
