import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import {Link,useNavigate,useLocation} from 'react-router-dom';

function Home() {


  return (
    <div>
      <div className="Home-Title">
        <h1>Skin Mixology</h1>
      </div>
     <div className = "Title-1">
          <p>A place for you to curate your own skincare regime base on your skin goal , using various products , across various skincare brands </p><br></br>
          <p>But the most important step to building your skincare is to know you skintype. <Link to="/HowToKnowYourSkinType">Find out your skintype</Link></p><br></br>         
   </div>
   </div>
  );
}

export default Home;
