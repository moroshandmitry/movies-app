import styled from 'styled-components/macro';

export const StyledFormError = styled.span.attrs({ role: 'alert' })`
    display: inline-block;
    font-size: ${props => props.theme.fontSize.xs};
    color: ${props => props.theme.commonColors.danger};
    font-weight: 700;
`;
