import styled from 'styled-components/macro';

export const StyledWidthLimiter = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
`;
