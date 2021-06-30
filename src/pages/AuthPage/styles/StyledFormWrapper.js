import styled from 'styled-components/macro';

import { StyledForm, StyledLegend } from '../../../styles';

const maxWidth = '50rem';

export const StyledFormWrapper = styled.div`
    max-width: ${maxWidth};
    width: 100%;
    background-color: ${props => props.theme.lightColors[600]};

    ${StyledForm} {
        padding: ${props => props.theme.padding.md};
    }

    ${StyledLegend} {
        margin-bottom: ${props => props.theme.margin.md};
    }
`;
