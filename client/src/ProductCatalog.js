import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Products from './Products';
import Pagination from './Pagination';



function ProductCatalog() {

const [prodDetails, setProdDetails] = useState([])

const [currentPage, setCurrentPage] = useState([1])

const [postPerPage, setPostsPerPage] = useState([12])



useEffect(() => {
  // declare the async data fetching function
  const fetchData = async () => {
   
    // get the data from the api
    const data = await fetch('/prod');
    // convert the data to json
    const json = await data.json();

    setProdDetails(json);
  
  }

  fetchData()

},[]);
//Get current posts 
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = prodDetails.slice(indexOfFirstPost,indexOfLastPost)

  //Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
    <div className="ProdTitle">
        <h1>Products</h1>
    </div>
    <div className="Search">      
    </div>

   <Products prodDetails={currentPosts}/>
   <Pagination 
   postPerPage={postPerPage} 
   totalPosts={prodDetails.length} 
   paginate={paginate}/>

  </>
  );
}

export default ProductCatalog