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
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Layout } from './components';
import { LayoutContainer, MovieDetailsPageContainer } from './containers';
import { HomePage, AuthPage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';

import { rootReducer } from './store';
import {
    darkTheme
    // lightTheme
} from './themes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
    // for use Redux DEVTOOLS basic witout middleware
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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

// const LogoutPage = () => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(logoutUser());
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     return <Redirect to="/auth" />;
// };

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
                                    {/* useHistory, useMatch, useLocation */}
                                    <Route path={['/favorite', '/profile']}>
                                        <FakePage />
                                    </Route>

                                    {/* <Route path="/logout">
                                        <LogoutPage />
                                    </Route> */}

                                    <Route path="/auth">
                                        <AuthPage />
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
