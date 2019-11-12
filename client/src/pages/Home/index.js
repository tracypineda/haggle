import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";
import Joke from "../../components/Joke/index.js"
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

  getJoke = () => {
    console.log("get goke function")
    // API.ChuckNorris().then(joke => {
    //   let newJoke = joke.data.value.joke.replace(/&quot;/g, '"');
    //   this.setState({
    //     joke: newJoke
    //   })
    // }).catch(err => {
    //   console.log(err)
    // });
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
        <div className="homeBox">
          <jumbotron>
            <h1>Welcome to The Haggle Hag Spot!</h1>
          </jumbotron>

          {this.state.loggedIn ? (
            <Button onClick={e => { this.getJoke() }} color="warning" block>Get New Joke</Button>
          ) : (<></>)}
        </div>
      </div>
      
          // <Carousel>
          //   <div>
          //     <img src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
          //     <p className="phone1">Photo 1</p>
          //     </div>

          //     <div>
          //     <img src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
          //     <p className="phone2">Photo 2</p>
          //     </div>

          //     <div>
          //     <img src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
          //     <p className="phone3">Photo 3</p>
          //     </div>            
          // </Carousel>
  
                
    );
  }
}


export default Home;
