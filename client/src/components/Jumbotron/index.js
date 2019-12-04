import React from "react";
import "./jumbotron.scss";

function Jumbotron({children}) {
  return (
    <div className="container">
      <div className="jumbotron">
      
        <p>The Haggle Hag Spot </p>
        <p>Where... You can look good for</p>
        <h4> <strong>NO PRICE</strong></h4>
        <p>The Haggle Hag Spot promotes a place to trade goods and avoid overconsumerism. 
          The average American has over 30,000 products in their homes. Trade your things
          don't accumulate more!
        </p>
         
        </div> 
      </div>
       
  );
}


    

export default Jumbotron;
