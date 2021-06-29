// import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Layout } from './components';
import { LayoutContainer, MovieDetailsPageContainer } from './containers';
import { HomePage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';
import {
    darkTheme
    // lightTheme
} from './themes';

const FakePage = props => {
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
                            <Switch>
                                <Route
                                    path={['/favorite', '/profile', '/logout']}
                                >
                                    {/* useHistory, useMatch, useLocation */}
                                    <FakePage />
                                </Route>

                                <Route path="/movie/:movieId" exact>
                                    <MovieDetailsPageContainer
                                        movies={movies}
                                    />
                                </Route>

                                <Route path="/" exact>
                                    {/* useHistory, useMatch, useLocation */}
                                    <HomePage movies={movies} />
                                </Route>

                                {/* Redirect all fake pages to home page */}
                                <Redirect to="/" />
                            </Switch>
                        </Layout>
                    )}
                </LayoutContainer>
            </ThemeProvider>
        </BrowserRouter>
    );
};
