import PT from 'prop-types';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { StyledLayout, StyledMain, StyledMainWidthLimiter } from './styles';

export const Layout = ({ children, ...otherProps }) => (
    <StyledLayout>
        <Header {...otherProps} />

        <StyledMain>
            <StyledMainWidthLimiter>{children}</StyledMainWidthLimiter>
        </StyledMain>

        <Footer />
    </StyledLayout>
);

Layout.propTypes = {
    /**
     * Page representation (Component to render)
     */
    children: PT.node.isRequired
};
