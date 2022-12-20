import React, { useEffect, useState } from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Authenticate } from './authTest';
// import { useCookies } from 'react-cookie'
// import Cookies from 'js-cookie'

const Login=()=>{
  
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [cookies, setCookie, removeCookie] = useCookies(['alabaster']);

  const form = {userName , password}
  const navigate = useNavigate();

  //the post 
  const options = {
                  method : 'POST',
                  credentials: "include",
                  // credentials:'same-origin',
                  headers :{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                  },
                  // mode:'no-cors',
                  body:JSON.stringify(form)
                }

  //async function to sent login details to DB
  const postUserLogin = async () => {
    const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/login`, options);
    // console.log(options.body)
    // console.log(response.headers)
    // console.log(cookies.value)
    console.log(`login cookie FE : ${document.cookie.split('=')[1]}`)
    try{ 
      if (response.status === 200){
        navigate("/skingoal")
      }
      else{
        // POP LOGIN FAILED
      }
    }catch (error){
    
      console.log(error.message)

    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setUsername('')
    setPassword('')
    postUserLogin()
  }

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField 
                label='Username' 
                placeholder='Enter username' 
                variant="outlined" 
                fullWidth 
                required
                value = {userName}
                onChange={(e) => {setUsername(e.target.value)}}
                />
                <TextField 
                label='Password' 
                placeholder='Enter password' 
                type='password' 
                variant="outlined" 
                fullWidth 
                required
                value = {password}
                onChange={(e) => {setPassword(e.target.value)}}
                />
                {/* <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /> */}
                <Button 
                type='submit' 
                color='primary' 
                variant="contained" 
                style={btnstyle} 
                fullWidth 
                onClick={handleSubmit}>Sign in</Button>
                {/* <Typography >
                     <Link href="#" >
                        Forgot password ?
                      </Link>
                </Typography> */}
                <Typography > Do you have an account ?
                     <Link to="/signup" >
                        Sign Up 
                </Link>
                </Typography>
                {/* <Authenticate/> */}
            </Paper>
        </Grid>
    )
}

export default Login;
