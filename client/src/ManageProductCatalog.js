import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link,useNavigate,useLocation} from 'react-router-dom';


function AdminProductCatalog() {


const [prodDetails, setProdDetails] = useState([])
const [isChecked, setIsChecked] = useState([])

useEffect(() => {
  // declare the async data fetching function
  const fetchData = async () => {
    // get the data from the api
    const data = await fetch('/api/prod');
    // convert the data to json
    const json = await data.json();

 
    setProdDetails(json);
  }

  fetchData()

},[])

const handleCheckBox = (e) =>{
    const {value,checked} =e.target;
    console.log(value,checked)
    if(checked){
        setIsChecked([...isChecked,value])
    }
    else{
      setIsChecked(isChecked.filter((e)=>e!==value));
    }
}

const allDelete = async () => {
    const data = await fetch('/api/prod', {
      method: "DELETE",
      body: JSON.stringify(isChecked),
       credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await data.json();
    console.log(json)
    window.location.reload();
  };



  return (


    <div className="AdminProduct">

      <div className="AdminHeader">
        <h1>Manage Product Catalog</h1>

         <button className="DeleteBtn" onClick={allDelete} >Delete</button>
        </div>


         <div className="ManageTable">   
        <table className="mainTable">
          <thead>
            <tr>
              <th scope = "col">#</th>
              <th scope = "col">No.</th>
              <th scope = "col">Prod ID</th>
              <th scope = "col">Prod Type</th>
              <th scope = "col">Name</th>
              <th scope = "col">Price</th>
              <th scope = "col">Description</th>
              <th scope = "col">Active Ingredients</th>
            </tr>
          </thead>

 
          <tbody>
            {prodDetails.map((proditem, index)=>(
            <tr key={index}>
              <td><input type="checkbox" className="deletecheck" value={proditem._id} checked={proditem.isChecked} onChange={(e)=>handleCheckBox(e)}/></td>
              <th scope="row">{index + 1}</th>
              <td>{proditem.Product_ID}</td>
              <td>{proditem.Product_Type}</td>
              <td>{proditem.Name}</td>
              <td>{proditem.Price}</td>
              <td>{proditem.Description}</td>
              <td>{proditem.Active_Ingredients}</td>  
            </tr>
              ))}
          </tbody>

        </table>
       </div>
 
  
    </div>
  );
}

export default AdminProductCatalog