// import { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

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
    return <p>I'm a fake page!</p>;
};

const OfficePage = props => {
    return <p>I'm an office page!</p>;
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
                            <Switch>
                                <Route path="/fake">
                                    {/* useHistory, useMatch, useLocation */}
                                    <FakePage />
                                </Route>

                                <Route path="/" exact>
                                    {/* useHistory, useMatch, useLocation */}
                                    <OfficePage />
                                </Route>

                                {/* Redirect all fake pages to home page */}
                                <Redirect to="/" />
                            </Switch>

                            <HomePage movies={movies} />
                        </Layout>
                    )}
                </LayoutContainer>
            </ThemeProvider>
        </BrowserRouter>
    );
};
