import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
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

//async function to sent login details to DB
    const postUserLogin = async () => {
      const response = await fetch('http://localhost:5000/login', options);
      try{ 
        
      const data = await response.json()
        console.log(data)

      if (data.includes("Email")){
        alert (data)
      }

      else if(data.includes("Password")){
        alert (data)
      }

      else{
         navigate("/UserSkinGoal")
      }

      }
      catch (error){
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
          <label>Username:</label>
            <input 
             type="text"
             required
             value = {username}
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
         
         <Link to="/SignUp">
            SignUp
        </Link>
        
      </header>
    </div>
  );
}

export default Login;
