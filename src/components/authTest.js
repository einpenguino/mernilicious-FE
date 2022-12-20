import './Home.css'
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Button from '@mui/material/Button';
import { ContactPageSharp } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom'


export function Authenticate() {
    const navigate = useNavigate();
    const options = {
        method : 'POST',
        credentials: "include",
        // credentials:'same-origin',
        headers :{
          'Content-Type': 'application/json'
        },
        // mode:'cors',
        // mode:'no-cors',
        body:JSON.stringify(document.cookie)
        // body:document.cookie
    }
    const handleSubmit = async () => {
    try{
        if(!document.cookie){
            navigate('/login')
        }else{
        console.log(options)
        const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/auth`, options)
        console.log(response)
        }
    }catch(e){
        console.log(e)
    }
    }
  return (
    <div className="auth-test">
      <Button
      type = 'submit'
      onClick={handleSubmit}
      >Test Auth</Button>
    </div>
  );
  }