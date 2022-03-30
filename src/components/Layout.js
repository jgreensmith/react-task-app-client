import React from 'react';
import { Box, ThemeProvider } from '@mui/system';
import { Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { theme } from '../utils/styles';
import Navbar from './Navbar';

const Layout = ({ children }) => {

    return (
        <React.Fragment>
            
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Navbar />
                {/* <Container maxWidth="100%" disableGutters={true} sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} > */}
                    <Toolbar />
                    <Toolbar />
                        {children}
                    
                    {/* <Footer /> */}
                {/* </Container > */}

            </ThemeProvider>
        </React.Fragment>
    )
}

export default Layout;