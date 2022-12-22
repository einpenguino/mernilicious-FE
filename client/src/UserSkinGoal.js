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
        console.log(data)
       
      }
      catch (error){
        alert ("fail")
       console.log(error.message)

      } 
    
    }

    const handleSubmit = (e) =>{
    e.preventDefault();
    if (skintype){
        if(isSensitive){
          if(skingoal){
              postUserProfile()
          }
          else{
            alert("Skin Goal not Selected")
          }
        }
        else{
          alert("Sensitivity not Selected")
        }
    }

    else{
     alert("Skin Type not Selected")
    }
      
    }
   

    return (
      <>
      <div className="userName">
        <p>Hi {name}</p>
    </div>
    <div className="SkinSurvey">
        <h1>Know Your Skin</h1>
      </div>
    <div className="UserSkinGoal">
        <form className ="SkinForm" onSubmit={handleSubmit}>
         <div className ="SkinType">
          <h3 className="rl">My Skin Type is :</h3>
          <br></br>
        <div className="r_ST">
            <input
             type="radio"
             name="ST"
             value = "Dry"
             onChange = {(e) => setSkinType(e.target.value)}
            />&nbsp;
             <label>Dry</label>&nbsp;&nbsp;

           
           
             <input 
             type="radio"
             name="ST"
             value = "Oily"
             onChange = {(e) => setSkinType(e.target.value)}
            />&nbsp;
             <label>Oily</label>&nbsp;&nbsp;

           

            <input 
             type="radio"
             name="ST"
             value = "Combination"
             onChange = {(e) => setSkinType(e.target.value)}
            />&nbsp;
             <label>Combination</label>&nbsp;&nbsp;

         

             <input 
             type="radio"
             name="ST"
             value = "Normal"
             onChange = {(e) => setSkinType(e.target.value)}
            />&nbsp;
             <label>Normal</label>&nbsp;&nbsp;
              </div>
            </div>

            <div className="Sensitivity">
            <h3 className="rl">Is my Skin Sensitive :</h3>
            <br></br>

            <div className="r_S">
            <input 
             type="radio"
             name="Sen"
             value = "true"
             onChange = {(e) => setSensitivity(e.target.value)}
            />&nbsp;
            <label>Yes</label> &nbsp;&nbsp;  

             <input 
             type="radio"
             name="Sen"
             value = "false"
             onChange = {(e) => setSensitivity(e.target.value)}
            />&nbsp;
            <label>No</label>&nbsp;&nbsp;
            </div>

            </div>

            <div className="SkinGoal">
             <h3 className="rl">My Skin Goal is :</h3>
             <br></br>

             <div className="r_SG">
            <input 
             type="radio"
             name="SG"
             value = "RB"
             onChange = {(e) => setSkinGoal(e.target.value)}
            />&nbsp;
            <label>Reduce Breakout</label>&nbsp;&nbsp;

       

             <input 
             type="radio"
             name="SG"
             value = "TH"
             onChange = {(e) => setSkinGoal(e.target.value)}
            />&nbsp;
            <label>Target Hyperpigmentation</label>&nbsp;&nbsp; 

             

             <input 
             type="radio"
             name="SG"
             value = "HY"
             onChange = {(e) => setSkinGoal(e.target.value)}
            />&nbsp;
            <label>Hydration</label>&nbsp;&nbsp; 

             

             <input 
             type="radio"
             name="SG"
             value = "AA"
             onChange = {(e) => setSkinGoal(e.target.value)}
            />&nbsp;
            <label>Anti-Aging</label>&nbsp;&nbsp;  
            </div> 
            </div>

          <input type="submit" value="Next" />
        </form>
       </div>
    </>
  );
}


export default UserSkinGoal;