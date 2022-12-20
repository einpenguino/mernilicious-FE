import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link,useNavigate,useLocation} from 'react-router-dom';


function AdminProductCatalog() {


const [prodDetails, setProdDetails] = useState([])

useEffect(() => {
  // declare the async data fetching function
  const fetchData = async () => {
    // get the data from the api
    const data = await fetch('http://localhost:5000/prod');
    // convert the data to json
    const json = await data.json();

 
    setProdDetails(json);
  }

  fetchData()

},[])


  return (
    <div className="AdminProduct">

        <br></br>
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
 
  
    </div>
  );
}

export default AdminProductCatalog