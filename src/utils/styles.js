import { Button, Card, Grid, ImageListItemBar } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';
import { Box, display } from '@mui/system';

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2.2rem',
      fontWeight: 400,
      margin: '2rem 0',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
  },
  palette: {
    primary: {
      main: '#8220FF',
      light: '#f1f3fa',
      dark: '#b4004e',
      text: '#fff'
    },
    secondary: {
      main: '#000',
      light: 'rgba(2, 29, 55, 0.7)',
      dark: '#283593',
      text: '#021d37'
    },
    error: {
      main: '#f04000',
    },
    background: {
      default: '#f1f3fa',
      dark: '#021d37'
    },
    info:{
      main: '#f1f3fa'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      vs: 500,
      sm: 680,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
 
});
//buttons

export const FilterButton = styled(Button)(({ theme }) => ({
  
  fontSize: '1.8rem',
  color: theme.palette.primary.text,
  textTransform: 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center center !important',
  width: '135px',
  boxSizing: 'border-box',
  position: 'relative',
}));

export const MainButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.text, 
  fontSize: '1.8rem',
  ":hover": { 
    background: 'none',
    color: theme.palette.secondary.main,
  },
  textTransform: 'none',

}));

export const ThumbnailButton = styled(Button)(({ theme }) => ({
  height: '56px',
  width: '48px',
  marginBottom: 3,
  ":hover": { 
    border: '2px solid'
  },
  boxShadow: theme.shadows[2], 
  boxSizing: 'border-box',
}));

//images
export const LogoImg = styled("img")({
  maxWidth: '110px',
});

export const StyledImg = styled("img")({
  width: '100%',
});

export const PortfolioImg = styled("img")(({ theme }) => ({
  width: '100%',
  borderRadius: '10px',
  boxShadow: theme.shadows[12]
}));
export const ProfileImg = styled("img")({
  borderRadius: '50%',
});


//containers

export const CenteredGrid = styled(Grid)({
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center'
});

export const PortfolioCard = styled('div')(({theme}) => ({
  width: '300px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  margin: '10px',

}));
export const PortfolioCardBody = styled('div')(({theme}) => ({
  width: '300px'
}));
export const CardBanner = styled('div')(({theme}) => ({
  width: '95%',
  position: 'absolute',
  marginBottom:  '5px',
  padding: '7px 10px',
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.background.dark,
  backdropFilter: 'blur(10px)',
  borderRadius: '10px',
  
  opacity: 0,
  transition: 'all 0.4s'
}));
//hero section

// export const HeroBox = styled('div')({
//   position: 'relative !important'
// });

export const HeroSlide = styled('div')({
  minHeight: '90vh',
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: 'inherit',
  paddingTop: '3rem',
  paddingBottom: '3rem',
  width: '100%',
});

export const HeroBox = styled('div')({
  backgroundColor: "#330033",
});