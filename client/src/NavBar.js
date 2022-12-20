import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NavBar({children}) {

 const username = sessionStorage.getItem("username");
  
  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const uroutes =[

    {
        path: "/",
        name: "Home",
    },

    {
        path: "/Login",
        name: "Login",
       
    },

     {
        path: "/ProductCatalog",
        name: "Products",
    
    }
  ]

  const adminroutes =[

    {
        path: "/",
        name: "Home",
    },

    {
        path: "/Login",
        name: "Login",
       
    },

     {
        path: "/ProductCatalog",
        name: "Products",
    
    },

     {
        path: "/AdminUpload",
        name: "Upload Products",
    
    },

    {
        path: "/ManageProductCatalog",
        name: "Manage Catalog",
    
    }

  ];
  

  return (
    <div className="Nav">
      <motion.div animate = {{width: isOpen ? "200px" : "45px"}} className="NavBar">
      
      <div className='top_section'>
         <div className='bars'> <FaBars onClick={toggle}/></div>

       {isOpen && <h1 className ='logo'>Skin Mixology</h1>}

      </div>


      <section className='routes'>
        
       {(username === "admin@gmail.com")?
          adminroutes.map((route) =>(
                <Link to={route.path} key={route.name} className='link'>
                  <div className='link_text'>{route.name}</div>
                </Link>
        )):
        uroutes.map((route) =>(
                <Link to={route.path} key={route.name} className='link'>
                  <div className='link_text'>{route.name}</div>
                </Link>

      ))}
      
      </section>

      </motion.div>

      <main>{children}</main>

    </div>
  );
}

export default NavBar;
