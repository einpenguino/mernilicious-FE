import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import {FaBars} from 'react-icons/fa'
import {Link, Navigate, useNavigate} from 'react-router-dom'

function NavBar({children}) {

  const navigate = useNavigate();

 const username = sessionStorage.getItem("username");
  
  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const logout =  async() => {
    const data = await fetch('/api/logout')
    sessionStorage.clear()
    navigate("/")
    
  }


  const Home = () => {
    navigate("/")
  }


  const uroutes =[

    {
        path: "/HowToKnowYourSkinType",
        name: "Skin Type",
       
    },

    {
        path: "/MySkinDiary",
        name: "My Skin Diary",
       
    }
  ]

  const adminroutes =[

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

       {isOpen && <h1 className ='logo' onClick={Home}>Skin Mixology</h1>}

      </div>


      <section className='routes'>

   
        <Link to="/ProductCatalog" className='link'>Products</Link>
        
      {(!username)?
          <Link to="/HowToKnowYourSkinType" className='link'>Skin Type</Link>
        :
        
       (username === "admin@gmail.com")?
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

    
      
      {(!username)?
        <Link to="/Login" className='link'>Login</Link>      
      :
       <div className='link' onClick={logout}>Logout</div>
      }

      </section>

      </motion.div>

      <main>{children}</main>

    </div>
  );
}

export default NavBar;
