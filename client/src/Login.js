import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

function Login() {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const form = {username , password}

  const navigate = useNavigate();


//the post 
  const options = {
                  method : 'POST',
                  credentials: "include",
                  headers :{
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify(form)
                }

//async function to sent login details and verify if account is in the DB
    const postUserLogin = async () => {
      const response = await fetch('/login', options);
      const data = await response.json()
  
      try{ 

      if (data.includes("Email")){
        alert (data)
      }

      else if(data.includes("Password")){
        alert (data)
      }
      
      else{
        if (username === "admin@gmail.com"){
          navigate("/AdminUpload")
         
        }
        else{

           navigate("/MySkinDiary")
           
            
         
      }
            sessionStorage.setItem("username",username);
           sessionStorage.setItem("name",data[1]);
          return data
      }
    }
      catch (error){
       console.log(error.message)

      } 
    
    }




  const handleSubmit = (e) =>{
    e.preventDefault();
    postUserLogin()
 
  }

 

  return (
    <div className="Login">
     
        <h1 className="LoginTitle">Login</h1>
        <form  className="LoginForm" onSubmit={handleSubmit}>

          <div className="row">
              <div className="col-25">
                <label>Username: </label>
              </div>
            <div className="col-75">
              <input 
              type="email" 
              required
              value = {username.toLowerCase()}
              onChange = {(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

           <div className="row">
              <div className="col-25">
                <label>Password: </label>
              </div>
            <div className="col-75">
              <input
              type="password" 
              required
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        <div className="signup-row">
            <p>Don't have an account?</p>
            <Link to="/SignUp">
                <p>Signup here</p>
            </Link>
        </div>

           <div className="row">
            <input type="submit" value="Submit" />
          </div>

        </form>

       
  
    </div>
  );
}

export default Login;
