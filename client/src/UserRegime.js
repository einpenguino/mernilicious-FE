import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link,useNavigate,useLocation} from 'react-router-dom';


function UserRegime() {

 const name = sessionStorage.getItem("name");
 const username = sessionStorage.getItem("username");
 const skinGoal = sessionStorage.getItem("skinGoal");

const [skingoal, setSkinGoal] = useState("") 
const [recomIng, setRecomIng] = useState([]) 


 useEffect(() => {
  // declare the async data fetching function
  const fetchData = async () => {
   
    // get the data from the api
    const data = await fetch(`/activeIng/${skinGoal}`)
  
    // convert the data to json
    const json = await data.json();
    console.log(json)


   setSkinGoal(json[0]);
   setRecomIng(json[1].join(", "));
  
  }

  fetchData()

},[]);


return (

      <>

      <div className="userName">
        <p>Hi {name}</p>
    </div>

    <div className="UserSkinRegime">
        <h1 className="SkinRegimeTitle">Curate your Skincare Regime</h1>
            <h3 className="skin">Your Skin Goal is:</h3>
            <p className="skin_g">{skingoal}</p>
        <h3 className="Recommendation">Recommended Ingrdients:</h3>
             <p className="skin_r">{recomIng}</p>
    </div>

        <div className ='AM'>
            <div className="UserSkinRegime">
                <h1 className="AM_Regime">AM</h1>
            </div>

            
          <div className='AM_C'>
            <div className="regimelabel"><h3>Cleanser</h3></div>
            <svg width="200" height="180">
                <rect x="50" y="20" rx="20" ry="20" width="150" height="150"/>
            </svg>
          </div>

           <div className='AM_T'>
            <div className="regimelabel"><h3>Treatment</h3></div>
            <svg width="200" height="180">
                <rect x="50" y="20" rx="20" ry="20" width="150" height="150"/>
            </svg>
          </div>
             
          <div className='AM_M'>
            <div className="regimelabel"><h3>Moisturiser</h3></div>
            <svg width="200" height="180">
                <rect x="50" y="20" rx="20" ry="20" width="150" height="150"/>
            </svg>
          </div>

          <div className='AM_SS'>
            <div className="regimelabel"><h3>Sunscreen</h3></div>
            <svg width="200" height="180">
                <rect x="50" y="20" rx="20" ry="20" width="150" height="150"/>
            </svg>
          </div>

        </div>
             

           <div className ='PM'>
             <div className="UserSkinRegime">
                <h1 className="PM_Regime">PM</h1>
            </div>
          <div className='PM_C'>
            <svg width="200" height="180">
                <rect x="50" y="20" rx="20" ry="20" width="150" height="150"/>
            </svg>
          </div>

           <div className='PM_T'>
            <svg width="200" height="180">
                <rect x="50" y="20" rx="20" ry="20" width="150" height="150"/>
            </svg>
          </div>
             
          <div className='PM_M'>
            <svg width="200" height="180">
                <rect x="50" y="20" rx="20" ry="20" width="150" height="150"/>
            </svg>
          </div>

          <div className='PM_SS'>
            <svg width="200" height="180">
                <rect className='NA' x="50" y="20" rx="20" ry="20" width="150" height="150"/>
            </svg>
          </div>

        </div>

        </>
  );
}



export default UserRegime;