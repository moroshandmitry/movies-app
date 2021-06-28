// import { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { Layout } from './components';
import { LayoutContainer } from './containers';
import { GlobalStyles } from './styles/GlobalStyles';
import {
    darkTheme
    // lightTheme
} from './themes';

export const App = () => {
    // const [theme, setTheme] = useState(darkTheme);

    // const handleSwitchTheme = () =>
    //     setTheme(() => {
    //         if (darkTheme) return lightTheme;
    //     });

    return (
        <ThemeProvider theme={darkTheme}>
            {/* <span>Theme</span>{' '}
            <button type="button" onClick={handleSwitchTheme}>
                Switch to Light Theme
            </button> */}
            <GlobalStyles />
            <LayoutContainer>
                {({ movies, ...otherProps }) => (
                    <Layout {...otherProps}>
                        {console.log('[otherProps]', otherProps)}
                        {console.log('[movies]', movies)}
                        <span>Movies list:</span>
                        {movies.map(movie => (
                            <div key={movie.id}>Movie ID: {movie.id}</div>
                        ))}
                    </Layout>
                )}
            </LayoutContainer>
        </ThemeProvider>
    );
};
