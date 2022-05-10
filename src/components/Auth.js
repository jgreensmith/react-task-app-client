import { Button, Container, Divider, FormControl, Grid, Grow, InputLabel, MenuItem, Paper, Select, TextField, Typography, InputAdornment, IconButton, OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

import GoogleIcon from '@mui/icons-material/Google';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { CenteredDiv, CenteredDivColumn, Gradient, InputContainer } from '../utils/styles';
import Layout from "./Layout";
import Icon from './svg/Icon';


const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const [authForm, setAuthForm] = useState({
    username: '',
    password: ''
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const switchMode = () => {
    setIsSignUp(!isSignUp);
  }
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  //google 0auth 

  const googleSuccess = (res) => {
    console.log(res);
  };

  const googleFailure = () => {
    console.log("google sign in unsuccesful")
  };



  return (
      <Layout>
        <Container sx={{ height: '90vh', display: "flex", justifyContent: "center", alignItems: 'center' }}>

        <Grow in>
         <Paper elevation={3} sx={{width: "80%",  borderRadius: '10px', mt: 2 }}>
          <Grid container>
            <Grid item xs={7}>
              <CenteredDivColumn sx={{ p: 2 }}>
                <Container>
                  <CenteredDivColumn sx={{ m: 0, p: 2 }}>
                    <Typography variant="h1" align="center">{isSignUp ? 'Sign Up' : 'Log In'} and Find Some Pals</Typography>
                    <GoogleLogin 
                      clientId="541538720752-bkhgfk1gmhdr2lmg2p4qnu90jk0hubm2.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <Button variant='contained' startIcon={<Icon />} sx={{backgroundColor: "#000000e0"}} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                          <Typography variant="body2" align='center' sx={{textTransform: 'capitalize'}}>{isSignUp ? 'Sign Up' : 'Log In'} With Google</Typography> 
                        </Button>
                      )}
                      onSuccess={googleSuccess}
                      onFailure={googleFailure}
                      cookiePolicy="single_host_origin"

                    />
                    
                  </CenteredDivColumn>
                  <Divider />

                  <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    {
                      isSignUp && (
                        <CenteredDiv sx={{ml: 2, mt: 2}}>
                    
                        <InputContainer>
                            <TextField 
                                name="firstname"
                                value={authForm.firstname}
                                variant="outlined"
                                label="Firstname"       
                                //sx={{m:2}}
                                onChange={handleChange}
                                />
                        </InputContainer>
                        <InputContainer>
                            <TextField 
                                name="lastname"
                                value={authForm.lastname}
                                variant="outlined"
                                label="Lastname"
                                //sx={{m:2}}
                                onChange={handleChange}
                                />
                        </InputContainer>
                    </CenteredDiv>
                      )
                    }
                    <InputContainer>
                        <TextField 
                            name="username"
                            value={authForm.username}
                            variant="outlined"
                            label="Username"
                            fullWidth
                            sx={{m:2, pr:3}}
                            onChange={handleChange}
                            />
                    </InputContainer>
                    <InputContainer sx={{p: '0 30px 0 8px'}}>
                    <FormControl fullwidth sx={{ m: 1, width: '100%' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={authForm.password}
                        onChange={handleChange}
                        fullwidth
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleShowPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                  </FormControl>
                  </InputContainer>
                    {
                      isSignUp && (
                        <InputContainer sx={{p: '0 30px 0 8px'}}>
                    <FormControl fullwidth sx={{ m: 1, width: '100%' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={authForm.password}
                        onChange={handleChange}
                        fullwidth
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleShowPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Confirm Password"
                      />
                  </FormControl>
                  </InputContainer>
                      )
                    }
                    
                    <CenteredDivColumn>
                      <Button  variant="contained" color="primary" size="large" type="submit"  sx={{p:'10px 40px', borderRadius: '50px'}}>{isSignUp ? 'Sign Up' : 'Log In'}</Button>
                    </CenteredDivColumn>
                
                  </form>
                </Container>
                </CenteredDivColumn>
                </Grid>
                <Grid item xs={5}>
                  <Gradient>
                    <Typography variant="h1" align="center" sx={{color: 'primary.light'}}>{isSignUp ? 'Already' : "Don't"} Have an Account?</Typography>
                    <Typography variant="body2" align="center" gutterBottom={true} sx={{color: 'primary.light'}}>{isSignUp ? 'Sign In' : 'Sign Up'} and find some pals</Typography>
                    <CenteredDivColumn sx={{pt: 2}}>
                      <Button  variant="contained" size="large" onClick={switchMode}  sx={{p:'10px 40px', borderRadius: '50px', backgroundColor: 'primary.light', color: 'secondary.main'}}>Sign {isSignUp ? 'In' : 'Up'}</Button>
                    </CenteredDivColumn>
                  </Gradient>                    
                </Grid>
          </Grid>
        </Paper>
        </Grow>
        </Container>
      </Layout>
  )
}

export default Auth;