import styled, { css, keyframes } from 'styled-components/macro';

const padding = `1.55rem`;

const boxShadowKeyframe = keyframes`
    0% {
		box-shadow: 0 0 0 0 rgba(228, 25, 49, 0.4);
	}
	70% {
		box-shadow: 0 0 0 10px rgba(228, 25, 49, 0);
	}
	100% {
		box-shadow: 0 0 0 0 rgba(228, 25, 49, 0);
	}
`;

const applyError = ({ $hasError }) => {
    if (!$hasError) return;
    return css`
        border: 0.2rem solid ${props => props.theme.commonColors.danger};
        opacity: 0.7;
        animation: 1s ${boxShadowKeyframe} infinite;
        font-weight: 700;

        &::placeholder {
            color: ${props => props.theme.commonColors.danger};
        }
    `;
};

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    padding: ${props => `${padding} ${props.theme.padding.sm}`};
    border-radius: 0.3rem;
    border: none;

    &:disabled {
        background: ${props => props.theme.lightColors[600]};
        color: ${props => props.theme.lightColors[500]};
        cursor: not-allowed;
    }

    ${applyError}
`;
