import { Button, Container, Divider, FormControl, Grid, Grow, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import GoogleIcon from '@mui/icons-material/Google';

import { CenteredDiv, InputContainer } from '../utils/styles';
import Layout from "./Layout";


const Auth = () => {
  const [authForm, setAuthForm] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  return (
      <Layout>
        <Container sx={{ height: '90vh', display: "flex", justifyContent: "center", alignItems: 'center' }}>

        <Grow in>
         <Paper elevation={3} sx={{width: "80%",  borderRadius: '10px' }}>
          <Grid container>
            <Grid item xs={7}>
              <CenteredDiv sx={{ p: 2 }}>
                <Container>
                  <CenteredDiv sx={{ m: 0, p: 2 }}>
                    <Typography variant="h1" align="center">Log in and Find Some Pals</Typography>
                    <Button variant='contained' startIcon={<GoogleIcon />} sx={{backgroundColor: "#000000e0"}} >
                      <Typography variant="body2" align='center' sx={{textTransform: 'capitalize'}}>Log in With Google</Typography> 
                    </Button>
                  </CenteredDiv>
                  <Divider />

                  <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              
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
                      
                      <CenteredDiv>

                        <Button  variant="contained" color="primary" size="large" type="submit"  sx={{p:'10px 40px', borderRadius: '50px'}}>Sign In</Button>
                      </CenteredDiv>
                  
                  </form>
                </Container>
                </CenteredDiv>
                </Grid>
                <Grid item xs={5}>
                  <CenteredDiv sx={{ p: 2, backgroundColor: 'primary.main', height: '100%', borderRadius: '0 10px 10px 0' }}>
                    
                  </CenteredDiv>
                </Grid>
          </Grid>
        </Paper>
        </Grow>
        </Container>
      </Layout>
  )
}

export default Auth;