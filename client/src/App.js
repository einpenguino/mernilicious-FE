import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useContext, createContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import ProductUpload from './ProductUpload';
import ManageProductCatalog from './ManageProductCatalog';
import Login from './Login';
import SignUp from './SignUp';
import ProductCatalog from './ProductCatalog';
import UserSkinGoal from './UserSkinGoal';
import UserRegime from './UserRegime';
import NavBar from './NavBar';
import HowToKnowYourSkinType from './HowToKnowYourSkinType.js';
import MySkinDiary from './MySkinDiary';


function App() {


  return (
    <div className="App">
  

        <NavBar>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/HowToKnowYourSkinType" element={<HowToKnowYourSkinType/>}/>
            <Route path="/AdminUpload" element={<ProductUpload/>}/>
            <Route path="/ManageProductCatalog" element={<ManageProductCatalog/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/ProductCatalog" element={<ProductCatalog/>}/>
            <Route path="/MySkinDiary" element={<MySkinDiary/>}/>
            <Route path="/UserSkinGoal" element={<UserSkinGoal/>}/>
            <Route path="/UserRegime" element={<UserRegime/>}/>
         </Routes>
        </NavBar>
         
    </div>
  );
}

export default App;
