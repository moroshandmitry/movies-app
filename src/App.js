// import { useState } from 'react';
import {
    BrowserRouter,
    Route,
    useHistory,
    useLocation,
    useRouteMatch,
    useParams
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Layout } from './components';
import { LayoutContainer } from './containers';
import { HomePage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';
import {
    darkTheme
    // lightTheme
} from './themes';

const FakePage = props => {
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();
    const params = useParams();
    console.log('[props]', props);
    console.log('[history]', history);
    console.log('[location]', location);
    console.log('[match]', match);
    console.log('[params]', params);
    return <p>I'm a fake page!</p>;
};

export const App = () => {
    // const [theme, setTheme] = useState(darkTheme);

    // const handleSwitchTheme = () =>
    //     setTheme(() => {
    //         if (darkTheme) return lightTheme;
    //     });

    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                {/* <span>Theme</span>{' '}
            <button type="button" onClick={handleSwitchTheme}>
                Switch to Light Theme
            </button> */}
                <GlobalStyles />
                <LayoutContainer>
                    {({ movies, ...otherProps }) => (
                        <Layout {...otherProps}>
                            <Route path="/office">
                                {/* useHistory, useMatch, useLocation */}
                                <FakePage name="Jack" />
                            </Route>

                            <HomePage movies={movies} />
                        </Layout>
                    )}
                </LayoutContainer>
            </ThemeProvider>
        </BrowserRouter>
    );
};
