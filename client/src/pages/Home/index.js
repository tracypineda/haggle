import React, { Component } from "react";
// import { Button } from "reactstrap";
import API from "../../utils/API";

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
          <Jumbotron />
         
          <Carousel />
   {/* <div className= "jumbo">
   <Jumbotron />
   </div> */}
          
          </div>
   
   
   
   
   );
  }
}
export default Home;
