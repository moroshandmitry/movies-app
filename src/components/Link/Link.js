import PT from 'prop-types';

import { StyledLink } from './styles';

export const Link = ({ children, ...otherProps }) => {
    return <StyledLink {...otherProps}>{children}</StyledLink>;
};

Link.propTypes = {
    /**
     * Link's content
     */
    children: PT.node.isRequired
};
