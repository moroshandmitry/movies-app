// import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// Storage (Global STATE) => Big object that contains state
// getState => To look at the current storage => returned state
// dispatch => to send update in store
// replaceReducer => take one of the existing reducers and replace with another reducer
/**
 * subscribe => notifying method our app about a update store
 * subscribe(listener) => listener is a function for update app render
 */
/**
 * Big reducer will contain more small reducers
 *  (for example small reducer contain info page)
 *  (for example another small reducer contain another info page)
 */
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Layout } from './components';
import { LayoutContainer, MovieDetailsPageContainer } from './containers';
import { HomePage, AuthPage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';

import { rootReducer } from './store';
import {
    darkTheme
    // lightTheme
} from './themes';

const store = createStore(
    rootReducer,
    // for use Redux DEVTOOLS
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('[store]', store);

// console.log('[Before store.getState()]', store.getState());

// store.dispatch({
//     type: 'UPDATE_FIRST_NAME_AND_LAST_NAME',
//     payload: {
//         newFirstName: 'Will',
//         newLastName: 'Smith'
//     }
// });

// console.log('[After store.getState()]', store.getState());

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
        <Provider store={store}>
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
                                        path={[
                                            '/favorite',
                                            '/profile',
                                            '/logout'
                                        ]}
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
        </Provider>
    );
};
