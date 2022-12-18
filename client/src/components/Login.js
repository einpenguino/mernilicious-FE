import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
const httpStatus = require('http-status');

function Login() {

  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const form = {userName , password}

  const navigate = useNavigate();

//the post 
  const options = {
                  method : 'POST',
                  credentials: "include",
                  headers :{
                    'Content-Type': 'application/json'
                  },
                  // mode:'no-cors',
                  body:JSON.stringify(form)
                }

//async function to sent login details to DB
    const postUserLogin = async () => {
      const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/login`, options);
      console.log(response.status)
      try{ 
        if (response.status === 200){
          navigate("/skingoal")
        }
        else{
          // POP LOGIN FAILED
        }
        // const data = await response.json()
        //   console.log(data)
        // if (data.includes("Email")){
        //   alert (data)
        // }

        // else if(data.includes("Password")){
        //   alert (data)
        // }
        
        // else{
        //   navigate("/skingoal")
        // }

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



 

  return (
    <div className="App">
      <header className="App-header">

        <Link to="/">
            Home
        </Link>

        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
            <input 
             type="text"
             required
             value = {userName}
             onChange = {(e) => setUsername(e.target.value)}
            />
           <br></br>

          <label>Password: </label>
          <input
          type="password" 
          required
          value = {password}
          onChange = {(e) => setPassword(e.target.value)}
          />
         <br></br>
          <input type="submit" value="Submit" />
        </form>
         
         <Link to="/signUp">
            SignUp
        </Link>
        
      </header>
    </div>
  );
}

export default Login;
