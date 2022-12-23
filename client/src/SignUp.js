import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

function SignUp() {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  

  const form = {name , username , password, confirmpassword }
  
  const navigate = useNavigate();
   
  //regex to confim if email address is valid & password requirement
  let regexUsername = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  let regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  //the post 
  const options = {
                  method : 'POST',
                  credentials: "include",
                  headers :{
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify(form)
                }

//async function to post data to DB
    const postUser = async () => {
      const response = await fetch('/userCred', options);
      try{ 
      
      const data = await response.json();
       
       alert ('Success')

      console.log(data)

      }
      catch (error){
        console.log(error)
        alert ("Username exists pls Sign in")

      }
    
    }

  
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if (regexUsername.test(username)){
        if(regexPassword.test(password)){
           if (password === confirmpassword){
               postUser()

               navigate("/Login")
              
           }
           else{
            alert ("Password & Confirm Password doesn't meet")
            setPassword('')
            setConfirmPassword('')
           }
        }
        else{
          alert ("Password entered doesn't meet the requirement");  
          setPassword('')
          setConfirmPassword('')
        }
    }
    else{
          alert ("Email entered is invalid");  
          setUsername('')
          
    }


  }


  return (
    
      <>
      <div className="SignUp">
        <h1 className="SignUpTitle">Sign Up</h1>
        <form className="SignUpForm" onSubmit={handleSubmit}>

          <div className="signrow">
            <div className="col-15">
              <label>Name:</label>
            </div>
            <div className="col-45">
            <input 
             type="text"
             required
             value = {name}
             placeholder = "Enter your name"
             onChange = {(e) => setName(e.target.value)}
            />
            </div>
          </div>


          <div className="signrow">
            <div className="col-15">
              <label>Username:</label>
            </div>
            <div className="col-45"> 
            <input 
             type="email"
             required
             value = {username.toLowerCase()}
             placeholder = "Enter an email address"
             onChange = {(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

          <div className="signrow">
            <div className="col-15">
              <label>Password: </label>
            </div>
            <div className="col-45">
              <input
              type="password" 
              required
              value = {password}
              placeholder = "Password"
              onChange = {(e) => setPassword(e.target.value)}
              />
            </div>
         </div>

         
        <div className="signrow">
          <div className="col-15">
               <label>Confirm Password: </label>
          </div>
          <div className="col-45">
            <input
            type="password" 
            required
            value = {confirmpassword}
            placeholder = "Confirm Password"
            onChange = {(e) => setConfirmPassword(e.target.value)}
            />
         </div>
         </div>
          
          <input className="SignButton" type="submit" value="Submit" />
      
        </form>
        </div>
    </>
  );
}

export default SignUp;