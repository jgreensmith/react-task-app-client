import React from 'react';
import {
    AppBar,
    Badge,
    Button,
    CircularProgress,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Slide,
    Toolbar,
    Tooltip,
    Typography,
    useScrollTrigger
} from '@mui/material';
import { Box } from '@mui/system';
import { LogoImg, MainButton, ThemeAppBar } from '../utils/styles';



function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}





const Navbar = (props) => {

    const { window } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <ThemeAppBar>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        
                            <MainButton >
                                Project Pals
                                
                            </MainButton>
                        
                        
                       

                    </Toolbar>
                </ThemeAppBar>
            </HideOnScroll>
            
        </React.Fragment>

    )
}

export default Navbar;