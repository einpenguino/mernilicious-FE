import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link,useNavigate,useLocation} from 'react-router-dom';


function UserSkinGoal() {
  
   const name = sessionStorage.getItem("name");
   const username = sessionStorage.getItem("username");
  const navigate = useNavigate();

  

  const [skintype, setSkinType] = useState('')
  const [isSensitive, setSensitivity] = useState('')
  const [skingoal, setSkinGoal] = useState('')
 

  const form = {username, skintype , isSensitive, skingoal}



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
    const postUserProfile = async () => {
      const response = await fetch('http://localhost:5000/skinsurvey', options);
      const data = await response.json()
      try{ 
      
        alert ("Success")
        navigate("/UserRegime")
       
      }
      catch (error){
        alert ("fail")
       console.log(error.message)

      } 
    
    }

    const handleSubmit = (e) =>{
    e.preventDefault();
      postUserProfile()
    }
   

    return (
    <div className="UserSkinGoal">
       <div>
         <h1></h1>
        <form onSubmit={handleSubmit}>
          <p>Hi {name}</p>
          <p>My Skin Type is :</p>
          
            <input 
             type="radio"
             checked={skintype === "Dry"}
             value = "Dry"
             onChange = {(e) => setSkinType(e.target.value)}
            />
             <label>Dry</label>

            <br></br>
           
             <input 
             type="radio"
             checked={skintype === "Oily"}
             value = "Oily"
             onChange = {(e) => setSkinType(e.target.value)}
            />
             <label>Oily</label>

            <br></br>

            <input 
             type="radio"
             checked={skintype === "Combination"}
             value = "Combination"
             onChange = {(e) => setSkinType(e.target.value)}
            />
             <label>Combination</label>

            <br></br>

             <input 
             type="radio"
             checked={skintype === "Normal"}
             value = "Normal"
             onChange = {(e) => setSkinType(e.target.value)}
            />
             <label>Normal</label>

            <br></br>

            <p>Is my Skin Sensitive :</p>
            <input 
             type="radio"
             checked={isSensitive === "true"}
             value = "true"
             onChange = {(e) => setSensitivity(e.target.value)}
            />
            <label>Yes</label>   

             <input 
             type="radio"
             checked={isSensitive === "false"}
             value = "false"
             onChange = {(e) => setSensitivity(e.target.value)}
            />
            <label>No</label>

             <br></br>


             <p>My Skin Goal is :</p>
            <input 
             type="radio"
             checked={skingoal === "RB"}
             value = "RB"
             onChange = {(e) => setSkinGoal(e.target.value)}
            />
            <label>Reduce Breakout</label>   

            <br></br>

             <input 
             type="radio"
             checked={skingoal === "TH"}
             value = "TH"
             onChange = {(e) => setSkinGoal(e.target.value)}
            />
            <label>Target Hyperpigmentation</label>   

             <br></br>

             <input 
             type="radio"
             checked={skingoal === "HY"}
             value = "HY"
             onChange = {(e) => setSkinGoal(e.target.value)}
            />
            <label>Hydration</label>   

             <br></br>

             <input 
             type="radio"
             checked={skingoal === "AA"}
             value = "AA"
             onChange = {(e) => setSkinGoal(e.target.value)}
            />
            <label>Anti-Aging</label>   

             <br></br>

          <input type="submit" value="Next" />
        </form>
       </div>
    </div>
  );
}


export default UserSkinGoal;