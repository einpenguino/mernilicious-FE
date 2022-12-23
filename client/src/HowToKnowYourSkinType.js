import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';



function HowToKnowYourSkinType() {

   
  return (
    <div>
      <div className="Title">
        <h1> Find out your Skin type</h1>
      </div>
     <div className = "Title-1">
          <h3> Method 1: Blot Paper Test</h3><br></br>
          <h3>What you’ll need:</h3>
   </div>

   <div className = "list-1">
      • A mirror <br></br> <br></br>
      • Blotting papers (or a ply of tissue, tissue paper, Starbucks napkins, or parchment paper)
    </div>

    <div className = "Title-2">
        <h3> What to do:</h3><br></br>
   </div>

    <div className="list-2">
          •	Wash your face with a cleanser & pat dry <br></br><br></br>
          •	Go about your day for two hours without putting on any additional skincare products <br></br><br></br>
          •	After two hours, stand in front of your mirror with blotting papers on hand<br></br><br></br>
          •	Place a blotting paper on the following areas of your face: T-zone, under eyes, cheeks, chin<br></br><br></br>
          •	Take note of where the blotting paper sticks to your face or falls off<br></br>  
    </div>

    <div className = "Title-2">
        <h3>Results:</h3><br></br>
   </div>
        <div className="list-2"> 
          Oily skin: All blotting papers are drenched in oil.<br></br><br></br>
          Dry skin: You’ll notice that some blotting papers fall off while some has specks of oil.<br></br><br></br>
          Combo skin: The blotting papers are sticking to T-zone area and falling off for other areas (can be vice versa too).<br></br><br></br>
          Sensitive skin: Your skin starts feeling tight, itchy or red during the two hour wait.<br></br><br></br>
          Normal skin: The blotting papers are sticking to the skin but fall off after a while. There are also uniform specks of oil present on all blotting papers.<br></br><br></br>
    </div>   
         <br></br>


       <div className = "Title-1">
          <h3> Method 2: Look and Pinch</h3><br></br>
          <h3>What you’ll need:</h3>
   </div>

   <div className = "list-1">
      • A mirror <br></br> <br></br>
    </div>

    <div className = "Title-2">
        <h3> What to do:</h3><br></br>
   </div>

    <div className="list-2">
         •	In a well lit area, look carefully at your skin using the mirror. Observe the cheeks, T-zone, chin, as well as the jawline.<br></br><br></br>
         •	Gently pinch your cheek between your index and thumb finger.<br></br><br></br>
    </div>

    <div className = "Title-2">
        <h3>Results:</h3><br></br>
   </div>
        <div className="list-2"> 
          Oily skin: Pores are visible and the skin looks somewhat shiny but feels taut and firm.<br></br><br></br>
          Dry skin: The skin feels dry and either has dry flakes or a “crumpled paper look” once pinched.<br></br><br></br>
          Combo skin: Pores are visible and skin looks somewhat shiny, especially in the T-zone. Other areas such as the cheeks, chin, jawline are more matte and dry to the touch. Combo skin also feels taut and firm to the touch.<br></br><br></br>
          Sensitive skin: The skin appears red, itchy, and somewhat irritated. Some sensitive skin types might see rashes, eczema and rough patches as well.<br></br><br></br>
          Normal skin: Pores aren’t visible and the skin feels taut and firm to the touch.<br></br><br></br>
    </div>   
         <br></br>

    <div className = "Courtesy">
        <p>Courtesy of <a href="https://beautywithinofficial.com/2019/06/13/skin-find-discover-products-for-your-skin-type/">https://beautywithinofficial.com/2019/06/13/skin-find-discover-products-for-your-skin-type/</a></p><br></br>
   </div> 
          
    </div>
 
  );
}

export default HowToKnowYourSkinType