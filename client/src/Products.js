import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';



function Products({prodDetails}) {

   
  return (
    
    
    <div className="Product">   
         {prodDetails.length > 0 && (
        <div className="ProdRows">
          {prodDetails.map(proditem => (
            <div key={proditem.Product_ID} className={proditem.Name} id="tiles">
              <div className="iImg"> 
              <img src={proditem.Prod_Image} alt={proditem.Name}/>
              </div>
              <div className="iName"> <p>{proditem.Name}</p></div>
              <div className="iPrice"> <p>{proditem.Price}</p></div>
            </div>
          ))}
          </div>
       
      )}
       </div>
 
  );
}

export default Products