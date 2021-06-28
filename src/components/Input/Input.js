import PT from 'prop-types';

import { StyledInput } from './styles';

export const Input = ({ autoComplete = 'off', ...otherProps }) => {
    return <StyledInput autoComplete={autoComplete} {...otherProps} />;
};

Input.propTypes = {
    /**
     * Indicates if input should have autocomplete
     */
    autoComplete: PT.oneOf(['on', 'off'])
};
