import styled from 'styled-components/macro';

export const StyledReleaseDate = styled.span`
    display: flex;
    justify-content: center;
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: 700;
    margin-bottom: ${props => props.theme.margin.md};
`;
