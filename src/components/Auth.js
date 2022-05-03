import { Button, Container, Divider, FormControl, Grid, Grow, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import GoogleIcon from '@mui/icons-material/Google';

import { CenteredDiv, CenteredDivColumn, Gradient, InputContainer } from '../utils/styles';
import Layout from "./Layout";


const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false); 
  const [authForm, setAuthForm] = useState({
    username: '',
    password: ''
  });

  const switchMode = () => {
    setIsSignUp(!isSignUp);
  }
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
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
                    <Button variant='contained' startIcon={<GoogleIcon />} sx={{backgroundColor: "#000000e0"}} >
                      <Typography variant="body2" align='center' sx={{textTransform: 'capitalize'}}>Log in With Google</Typography> 
                    </Button>
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
                    <InputContainer>
                        <TextField
                            name="password"
                            value={authForm.password}
                            variant="outlined"
                            type="password"
                            label="Password"
                            fullWidth
                            sx={{m:2, pr:3}}
                            onChange={handleChange}
                            />
                    </InputContainer>
                    {
                      isSignUp && (
                        <InputContainer>
                          <TextField
                              name="password"
                              value={authForm.password}
                              variant="outlined"
                              type="password"
                              label="Confirm Password"
                              fullWidth
                              sx={{m:2, pr:3}}
                              onChange={handleChange}
                              />
                        </InputContainer>
                      )
                    }
                    
                    <CenteredDivColumn>
                      <Button  variant="contained" color="primary" size="large" type="submit"  sx={{p:'10px 40px', borderRadius: '50px'}}>Sign In</Button>
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