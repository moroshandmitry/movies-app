import styled from 'styled-components/macro';

export const StyledTitle = styled.h1`
    display: block;
    font-size: ${props => props.theme.fontSize.md};
    font-weight: 700;
    text-align: center;
    margin-bottom: ${props => props.theme.margin.md};
`;
