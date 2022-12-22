import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';



function Pagination({postPerPage, totalPosts, paginate}) {

    const pageNumbers = [];

    for (let i=1; i<= Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i);
    }


  return (

    
    <nav>
        <ul className="Pagination">
            {pageNumbers.map(number =>
                <li key={number} className="pageitem">
                    <button onClick ={()=>paginate(number)}  className="pagelink">
                        {number}
                    </button>
                </li>
                )}
        </ul>
    </nav>
    
 
  );
}

export default Pagination