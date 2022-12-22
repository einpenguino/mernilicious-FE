import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link,useNavigate,useLocation} from 'react-router-dom';


function UserRegime() {

 const name = sessionStorage.getItem("name");
 const username = sessionStorage.getItem("username");



return (

      <>
      <div className="userName">
        <p>Hi {name}</p>
    </div>

    <div className="UserSkinRegime">
        <h1 className="SkinRegimeTitle">Curate your Regime</h1>
    </div>
      
    <div className="UserSkinRegime">
        <h1 className="Recommendation"></h1>
    </div>

        <div className ='AM'>
            <div className="UserSkinRegime">
                <h1 className="AM_Regime">AM</h1>
            </div>
          <div className='AM_C'>
            <svg width="200" height="180">
                <rect x="50" y="20" rx="20" ry="20" width="150" height="150"/>
            </svg>
          </div>

           <div className='AM_T'>
            <svg width="200" height="180">
                <rect x="50" y="20" rx="20" ry="20" width="150" height="150"/>
            </svg>
          </div>
             
          <div className='AM_M'>
            <svg width="200" height="180">
                <rect x="50" y="20" rx="20" ry="20" width="150" height="150"/>
            </svg>
          </div>

          <div className='AM_SS'>
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
                <rect x="50" y="20" rx="20" ry="20" width="150" height="150"/>
            </svg>
          </div>

        </div>

        </>
  );
}



export default UserRegime;