import styled, { css } from 'styled-components/macro';

const applyActiveStyles = ({ $active, theme }) => {
    const lightColor = theme.lightColors[600];
    const darkColor = '#b3b3b3';

    return css`
        background-color: ${$active ? darkColor : lightColor};
    `;
};

const applyCursor = ({ $active }) => {
    if ($active)
        return css`
            cursor: not-allowed;
        `;

    return css`
        cursor: pointer;
    `;
};

export const StyledTab = styled.div.attrs({ role: 'button', tabIndex: 0 })`
    width: 50%;
    padding: ${props => props.theme.padding.md};

    text-align: center;

    &:first-child {
        border-radius: 0.5rem 0 0 0;
    }

    &:last-child {
        border-radius: 0 0.5rem 0 0;
    }

    ${applyActiveStyles}
    ${applyCursor}
`;
