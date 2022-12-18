// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import ProductUpload from './components/ProductUpload';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProductCatalog from './components/ProductCatalog';
import UserSkinGoal from './components/UserSkinGoal';
import UserRegime from './components/UserRegime';


function App() {


  return (
    <div className="App">
      <header className="App-header">     
       <div>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/AdminUpload" element={<ProductUpload/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/ProductCatalog" element={<ProductCatalog/>}/>
            <Route path="/UserSkinGoal" element={<UserSkinGoal/>}/>
            <Route path="/UserRegime" element={<UserRegime/>}/>
         </Routes>
       </div>

      </header>
    </div>
  );
}

export default App;
