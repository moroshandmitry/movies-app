import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
    padding: ${props => props.theme.padding.md};
    color: ${props => props.theme.header.color};
    background: ${props => props.theme.header.background};
    position: fixed;
    z-index: 2;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    @media only screen and (min-width: 1000px) and (max-width: 1200px) {
        padding: ${props => props.theme.padding.xs};
    }

    @media only screen and (min-width: 300px) and (max-width: 1000px) {
        padding: ${props => props.theme.padding.xs};
    }
`;
