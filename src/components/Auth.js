import { Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { InputContainer } from '../utils/styles';
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
        <Container sx={{ display: "flex", justifyContent: "space-around", alignContent: 'center' }}>

        <Paper  sx={{width: "373px" }}>
            <div style={{m: 0, p: 2, display: "flex", justifyContent: "space-between"}}>
                <Typography variant="h6" align="center">Sign In</Typography>
                
            </div>

                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            
                    <InputContainer>
                        <TextField 
                            name="title"
                            value={authForm.username}
                            variant="outlined"
                            label="Title"
                            fullWidth
                            sx={{m:2, pr:3}}
                            onChange={handleChange}
                            />
                    </InputContainer>
                    <InputContainer>
                        <TextField
                            name="message"
                            value={authForm.password}
                            variant="outlined"
                            label="Message"
                            fullWidth
                            sx={{m:2, pr:3}}
                            onChange={handleChange}
                            />
                    </InputContainer>
                    

                
                    <Button  variant="contained" color="primary" size="large" type="submit" fullWidth sx={{p:2}}>Submit</Button>
                </form>
        </Paper>
        </Container>
      </Layout>
  )
}

export default Auth;