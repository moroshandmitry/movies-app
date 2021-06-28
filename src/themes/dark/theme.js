import * as commonVariables from '../variables';

export const theme = {
    ...commonVariables,
    header: {
        background: 'linear-gradient(to right, #2a0845, #6441A5)',
        color: '#fff'
    },
    footer: {
        background: 'linear-gradient(to right, #2a0845, #6441A5)',
        color: '#fff'
    },
    button: {
        background: commonVariables.lightColors[500],
        color: commonVariables.darkColors[900]
    }
};