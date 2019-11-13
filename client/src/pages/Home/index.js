import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";
// import Joke from "../../components/Joke/index.js"
import "./Home.scss";
import Carousel from "../../components/Carousel";
// import Jumbotron from "../../components/Jumbotron"

class Home extends Component {

  state = {
    loggedIn: false,

  };

  componentDidMount() {
    this.getJoke();
    this.loggedIn();
  }

  // getJoke = () => {
  //   console.log("get joke function")
  //   API.ChuckNorris().then(joke => {
  //     let newJoke = joke.data.value.joke.replace(/&quot;/g, '"');
  //     this.setState({
  //       joke: newJoke
  //     })
  //   }).catch(err => {
  //     console.log(err)
  //   });
  // }

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
        <div className="homeBox">
        <jumbotron>
          <h1>Welcome to the Haggle Hag Spot</h1>
        </jumbotron>


          {this.state.loggedIn ? (
            <Button onClick={e => { this.getJoke() }} color="warning" block>Get New Joke</Button>
          ) : (<></>)}
        </div>
        <Carousel />
      </div>
      
         
  
                
    );
  }
}


export default Home;
