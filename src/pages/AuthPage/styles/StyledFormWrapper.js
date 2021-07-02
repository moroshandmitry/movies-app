import styled from 'styled-components/macro';

import { StyledButton } from '../../../components/Button';
import { StyledForm, StyledLegend } from '../../../styles';

const maxWidth = '50rem';

export const StyledFormWrapper = styled.div`
    max-width: ${maxWidth};
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.7rem 0.7rem ${props => props.theme.darkColors[800]};

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
