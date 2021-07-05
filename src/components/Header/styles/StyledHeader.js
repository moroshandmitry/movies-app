import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
    padding: ${props => props.theme.padding.md};
    color: ${props => props.theme.header.color};
    background: ${props => props.theme.header.background};
    position: fixed;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;
