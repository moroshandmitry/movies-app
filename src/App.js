// import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Layout } from './components';
import { LayoutContainer, MovieDetailsPageContainer } from './containers';
import { HomePage, AuthPage } from './pages';
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
                                <Route path="/auth">
                                    <AuthPage />
                                </Route>

                                {/* useHistory, useMatch, useLocation */}
                                <Route
                                    path={['/favorite', '/profile', '/logout']}
                                >
                                    <FakePage />
                                </Route>

                                {/* movieId - is a default slug */}
                                {/* <Route path="/:slug" exact component={ItemPage} /> */}
                                {/* useHistory, useMatch, useLocation */}
                                <Route path="/movie/:movieId" exact>
                                    <MovieDetailsPageContainer
                                        movies={movies}
                                    />
                                </Route>

                                {/* useHistory, useMatch, useLocation */}
                                <Route path="/" exact>
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
