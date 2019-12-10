import React, { Component } from "react";
// import { Button } from "reactstrap";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import "./Home.scss";
import Carousel from "../../components/Carousel";
import Jumbotron from "../../components/Jumbotron";
import Homebox from "../../components/Homebox";

class Home extends Component {

  state = {
    loggedIn: false,

  };

  componentDidMount() {

    this.loggedIn();
  }



  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
     

        <div className= "background">
          <h1>Welcome to the Haggle Hag Spot</h1>
       
           <p style={{textAlign: "center", color: "rgb(97, 97, 92)", fontSize: "22px", marginTop: "20px"}}>The Haggle Hag Spot is a <strong>CASHLESS</strong> platform that encourages trading 
          over mass consumerism.
          The average American has over 30,000 products in their homes. <i>Trade your things
          don't accumulate more!</i>
        </p>  
        
          <Carousel />
         
        
          </div>
     
      
      
   
   
   
   );
  }
}
export default Home;
