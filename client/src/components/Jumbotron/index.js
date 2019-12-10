import React from "react";
import "./jumbotron.scss";

function Jumbotron({children}) {
  return (
    <div className="container">
      <div className="jumbotron">
      
        {/* <p>The Haggle Hag Spot </p>
        <p>Where... You can look good for</p>
        <h4> <strong>NO PRICE</strong></h4> */}
<p>The Haggle Hag Spot is a <strong>CASHLESS</strong> platform that encourages trading 
          over mass consumerism.
          The average American has over 30,000 products in their homes. Trade your things
          don't accumulate more!</p>
        
         
        </div> 
      </div>
       
  );
}


    

export default Jumbotron;
