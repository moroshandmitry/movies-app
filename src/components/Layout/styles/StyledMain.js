import styled from 'styled-components/macro';

export const StyledMain = styled.main`
    flex-grow: 1;
    background-color: ${props => props.theme.darkColors[700]};
    margin-top: 7rem;
`;
