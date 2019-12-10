import React from "react";
import Homebox from"../../components/Homebox/homebox.scss";
import DeleteBtn from "../../components/DeleteBtn";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Home(props) {
  return (
    function Jumbotron({children}) {
      return (
        <div className="container">
          <div className="jumbotron">
          
            <p>The Haggle Hag Spot </p>
            <p>Where... You can look good for</p>
            <h4> <strong>NO PRICE</strong></h4>
            
             
            </div> 
          </div>
           
      );
    }
  //   <div className="homeBox">
      
  //   <home home={this.state.home}/> 
  //    {this.state.loggedIn ? (
  //     <DeleteBtn  onClick={e=> {this.getJoke()}} color="warning" block>Get New Joke</DeleteBtn>
  //   ) : (<></>)}
  // </div>
  );
}
export default Home;