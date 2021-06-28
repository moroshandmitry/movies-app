// import { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { Layout } from './components';
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
            <Layout>
                <span>Content</span>
            </Layout>
        </ThemeProvider>
    );
};
