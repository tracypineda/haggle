import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";

import "./Home.scss";
import Carousel from "../../components/Carousel";
// import Jumbotron from "../../components/Jumbotron"

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
      <div className="background">
        {/* <div className="homeBox"></div> */}

          <h1>Welcome to the Haggle Hag Spot</h1>
          
          <Carousel />
      </div>
    
       


    );

  }
}

export default Home;
