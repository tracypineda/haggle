import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Barter from "./pages/Barter";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// import Carousel from "./components/Carousel";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import Email from "./components/Email";
import Footer from "./components/Footer";
// import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { ENAMETOOLONG } from "constants";
 

function App() {
  return (
    <Router>
      <div style={{ background:"#9486869a", height: "100vh"}}>
        <TopNav />
       

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
          <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/barter" component={Barter} />
          <Route exact path="/email" component={Email} />
          <Route component={NoMatch} />
        </Switch>
      
       <Footer />
      
      </div>
    </Router>
  );
}
export default App;