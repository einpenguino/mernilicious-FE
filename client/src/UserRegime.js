import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link,useNavigate,useLocation} from 'react-router-dom';


function UserRegime() {

 const location= useLocation();
  const navigate = useNavigate();




return (
    <div className="UserSkinRegime">
      <header className="UserSkinRegime"> 
       
      <ul>
        <li>
        <Link to="/">
            Home
        </Link>
        </li>
       </ul>   

       <div>
         <h1></h1>
        <form >
          <p>Hi</p>
          <h3>AM Routine</h3>

        <div className ='AM'>
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
             
          <h3>PM Routine</h3>

           <div className ='PM'>
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

        </form>
       </div>

      </header>
    </div>
  );
}



export default UserRegime;