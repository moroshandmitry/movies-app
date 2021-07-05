import styled from 'styled-components/macro';

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: ${props => props.theme.padding.md};
`;
