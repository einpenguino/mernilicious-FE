import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import {Link} from 'react-router-dom'



function MySkinDiary() {

 const name = sessionStorage.getItem("name");
 const username = sessionStorage.getItem("username");


   
  return (
   
   <>

      <div className="userName">
        <p>Hi {name}</p>
        <div className="plus-sign"><Link to="/UserSkinGoal"><AiOutlinePlus size={40} /></Link></div>
    </div>

    <div className="UserSkinDiary">
        <h1 className="DiaryTitle">My Skin Diary</h1>    
    </div>

    </>
  )
}

export default MySkinDiary