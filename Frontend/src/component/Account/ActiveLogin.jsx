import { useState } from "react";
import React from "react";
import { Box, Button, TextField, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  margin-top: 60px;
  border-radius: 2px;

  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0);
  
`;
const Image = styled('img')({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});


const Wrapper = styled(Box)`
padding-top: 25px 35px;
display: flex;
flex:1;
flex-direction: column;
&>div,&>button,&>p{
  margin-top:20px;
}`;

const LoginButton = styled(Button)`
text-transform:none;
background:#FB06418;
hight:48px;
border-radius:2px`;
const SignupButton = styled(Button)`
text-transform:none;
background:#FB06418;
hight:48px;
border-radius:2px
box-shadow 0 2px 4px  0 rgb(0 0 0/20%)`;

const  SignupInitialvalue={
  name :'',
  email:'',
  username :'',
  password:''
}
const ActiveLogin = () => {
  const imageURL =
    "https://cdn.pixabay.com/photo/2018/09/17/23/21/imagination-3685048_1280.png";

  const [account,toggleAccount]= useState('login')
  const [signup,setSingup]= useState(SignupInitialvalue)

  const toggleSignup = ()=>{
    account === 'Signup'?toggleAccount('login'):toggleAccount('Signup')
  }

  const  onInputChange= (e)=>{
    setSingup( { ...signup,[ e.target.name]:e.target.value})
  }
  return (
    <Component>
      <Box>
          <Image src={imageURL} alt="/login" />
      {
        
        account === 'login'?
        <Wrapper>
          <TextField
            variant="outlined"
            helperText="Please enter your Username"
            id="demo-helper-text-aligned"
            label="Username"
          />
          <TextField
            variant="outlined"
            helperText="Please enter your Password"
            id="demo-helper-text-aligned-no-helper"
            text="password"
            label="Password"
          />
          <LoginButton variant="contained" color="success">
            Login
          </LoginButton>
          <Typography>
              OR
          </Typography >
          <SignupButton onClick={()=>toggleSignup()}>Create An New Account</SignupButton>
        </Wrapper>
      :
        <Wrapper>
          <TextField
            variant="outlined" onChange={(e)=>onInputChange(e)} name="name"
            helperText="Please enter your Name"
            id="demo-helper-text-aligned"
            label="Name"
          />
          <TextField
            variant="outlined"onChange={(e)=>onInputChange(e)} name="email"
            helperText="Please enter your Email"
            id="demo-helper-text-aligned"
            text="email"
            label="email"
          />
          <TextField
            variant="outlined"onChange={(e)=>onInputChange(e)} name="Username"
            helperText="Please enter your Username"
            id="demo-helper-text-aligned-no-helper"
              label="Username"
          />
          <TextField
            variant="outlined"onChange={(e)=>onInputChange(e)} name="Password"
            helperText="Please enter your Password"
            id="demo-helper-text-aligned-no-helper"
            text="password"
            label="Password"
          />
          <SignupButton variant="contained" color="success">
            Signup
          </SignupButton>
          <Typography>
              OR
          </Typography >
          <LoginButton onClick={()=>toggleSignup()}>Already have an Account</LoginButton>
        </Wrapper>
      }
      </Box>
    </Component>
  );
};

export default ActiveLogin;
