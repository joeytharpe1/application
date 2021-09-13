import React from 'react';
import Home from './Home';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#097969', //green
            light: '#000000' //white
        },
        secondary: {
            main: '#ADB3BC' //grey
        },
        warning: {
            main: '#fff'
        }
    },
    typography: {
        fontFamily: 'sans-serif'
    }
})

function Main() {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    )
}

export default Main
