import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useCallback} from 'react';
import {Link,useNavigate,useLocation} from 'react-router-dom';
import {Multiselect} from 'multiselect-react-dropdown'

function ProductUpload() {

 const adminname = sessionStorage.getItem("name");

  const [p_id, setID] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [prodtype, setProdtype] = useState('')
  const [skintype, setSkintype] = useState([])
  const [desc, setDesc] = useState('')
  const [ing, setIng] = useState('')
  const [optAct, setOptAct] = useState([])
  const [act_ing, setAct_ing] = useState([])
  const [img, setImg] = useState("")

   

  const form = {p_id , name, price, prodtype, skintype, desc, ing, act_ing, img}

  const navigate = useNavigate();

  //for checkbox
  const handleChange = (e) =>{
    const value = e.target.value
    const checked = e.target.checked
    console.log(value,checked)
    if (checked){
      setSkintype([...skintype,value])
    }
    else{
      setSkintype(skintype.filter( (e) => ( e !== value )))
    }
  }


  //Upload image 

  const uploadImage = async(e) =>{
    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    setImg(base64)
    
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = ()=>{
          resolve(fileReader.result)
        };
        fileReader.onerror = (error)=>{
          reject(error)
        }

    })
  }



//Get Active Ingredients
useEffect(() => {


  // declare the async data fetching function
  const fetchData = async () => {
    // get the data from the api
    const data = await fetch('/activeIng');
    // convert the data to json
    const json = await data.json();

    setOptAct(json)
  
  }

  fetchData()

},[])



  //the post 
  const options = {
                  method : 'POST',
                  credentials: "include",
                  headers :{
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify(form)
                }


  //async function to post data to DB
    const postProduct = async () => {
      const response = await fetch('/', options);
      const data = await response.json();
      try{  
      
       alert ("Save successful")
        console.log(data) 
         window.location.reload();
       
      }
      catch (error){
        alert ("Save unsuccessful")
        console.log(error.message)
        
      }
      
    }

  const handleSubmit = (e) =>{
    e.preventDefault();
    postProduct()
  
  
   
    
    

  }


  return (
    <>
    <div className="userName">
       <p>Hi {adminname}</p>
    </div>
    <div className="ProdUpload">
      <div className="AdminTitle">
        <h1>Admin Product upload</h1>
      </div>
        <form className ="ProdForm" onSubmit={handleSubmit}>

          <div className="prodrow">
              <div className="col-35">
                  <label>Product ID: </label>
              </div>
              <div className="col-65">
                  <input 
                  type="text"
                  required
                  value = {p_id}
                  onChange = {(e) => setID(e.target.value)}
                  />
              </div>
           </div>

          <div className="prodrow">
              <div className="col-35">
                <label>Name: </label>
              </div>
            <div className="col-65">
              <input
              type="text" 
              required
              value = {name}
              onChange = {(e) => setName(e.target.value)}
              />
            </div>
          </div>


          <div className="prodrow">
              <div className="col-35">
                <label>Price: </label>
              </div>
            <div className="col-65">
              <input
              type="text" 
              required
              value = {price}
              onChange = {(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
      
          <div className="prodrow">
              <div className="col-35">
                 <label id="dd">Product Type: </label>
              </div>
              <div className="col-65">
              <select value={prodtype} onChange = {(e) => setProdtype(e.target.value)} > 
  
              <option>--Select a Product Type--</option>
              <option>Cleanser</option>
              <option>Treatment</option>
              <option>Moisturiser</option>
              <option>Sunscreen</option>

            </select>
            </div>
          </div>

           <div className="prodrow">
              <div className="col-35">
                <label>Best Suited for: </label>
              </div>
            <div className="col-65">
              <input
              type="checkbox" 
              value = "Dry"
              onChange = {handleChange}
              />&nbsp;
              <label className="cl">Dry</label>&nbsp;&nbsp;

              <input
              type="checkbox" 
              value = "Oily"
              onChange = {handleChange}
              />&nbsp;
              <label className="cl">Oily</label>&nbsp;&nbsp;

              <input
              type="checkbox" 
              value = "Combination"
              onChange = {handleChange}
              />&nbsp;
              <label className="cl">Combination</label>&nbsp;&nbsp;

              <input
              type="checkbox" 
              value = "Normal"
              onChange = {handleChange}
              />&nbsp;
             <label className="cl">Normal</label>&nbsp;&nbsp;
            </div>
          </div>



          <div className="prodrow">
              <div className="col-35">
                <label>Description: </label>
              </div>
            <div className="col-65">
              <textarea
              type="text" 
              required
              value = {desc}
              onChange = {(e) => setDesc(e.target.value)}
              />
            </div>
          </div>



           <div className="prodrow">
              <div className="col-35">
                <label>Ingredients: </label>
              </div>
            <div className="col-65">
              <textarea
              type="text" 
              required
              value = {ing}
              onChange = {(e) => setIng(e.target.value)}
              />
            </div>
          </div>



           <div className="prodrow">
              <div className="col-35">
                <label>Active Ingredients: </label>
              </div>
            <div className="col-65">
                <Multiselect 
                isObject = {false}
                options={optAct}
                onRemove={setAct_ing}
                onSelect={setAct_ing}
                showCheckbox
                />
            </div>
          </div>

          <div className="prodrow">
              <div className="col-35">
                <label>Image: </label>
              </div>
            <div className="col-65">
              <input
              type="file" 
              required
              accept = ".jpeg, .png, .jpg"
              onChange = {uploadImage}
              />
              
            </div>
          </div>
        
          <br></br>

          <div className="prodrow">
            <input type="submit" value="Submit" />
          </div>

        </form>
    </div>
  </>
  );
}

export default ProductUpload;
