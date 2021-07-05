import styled from 'styled-components/macro';

import { StyledButton } from '../../../components/Button';
import { StyledForm, StyledLegend } from '../../../styles';

const maxWidth = '50rem';

export const StyledFormWrapper = styled.div`
    max-width: ${maxWidth};
    width: 100%;
    border-radius: 0.5rem;

    ${StyledForm} {
        background-color: ${props => props.theme.lightColors[600]};
        padding: ${props => props.theme.padding.lg};
    }

    ${StyledLegend} {
        margin-bottom: ${props => props.theme.margin.md};
    }

    ${StyledButton} {
        margin: 0 auto;
    }
`;
