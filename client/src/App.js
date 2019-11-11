import React { Component } from "react";
import { BrowerRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Profile from "../components/profile";
import barter from "../components/barter";
import sign-up from "../components/sign-up";

Class App extends Component {
  render() {
  return (
    <Router>

<div className="container">
<div className="navbar navbar-expand-lg navbar-light bg-light">
{/* <a className= "navbar-brand" */}
<img src={women-in-red.jpg} height="30" weight="30" alt="hag lady" />
<Link to="/" className="navbar-brand">The Haggle Hag Spot</Link>
<div className="collapse nav-collaspe"> 
  <ul className="navbar-nav mr-auto">
    <li className="navabr-item">
      <Link to="/" className="nav-link">Home</Link>
      
      </li>
      <li className="navabr-item">
      <Link to="/" className="nav-link">Sign-in</Link>
      </li>
      <li className="navabr-item">
      <Link to="/" className="nav-link">Sign-up</Link>
      
      </li>
      <li className="navabr-item">
      <Link to="/" className="nav-link">Barter</Link>
      
      </li>
      </ul>
      </div>
  </nav>
<Route path= "/" exact component={Home} />
<Route path = "/profile/:id" component={Profile} />
<Route path = "/barter/:id" component={Barter} />
<Route path = "/sign-up/:id" component={Sign-up} />
</div>
</Router>
);

}

}

export default App