
// import React, {Component} from "react";
// import "./Barter.scss";
// import { Button } from "reactstrap";
// import { Link } from "react-router-dom"
// import API from '../Auth';

// class Barter extends Component {
//     state = {
//         loggedIn: false,
//         user: null,
//         loading: true,
//         wants: "",
//         haves: "",
//         itemName: "",
//         itemDescription: ""
//     }

//     componentDidMount() {

//         this.loading();

import React, {Component} from "react";
import "./Barter.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import API from '../Auth';

class Barter extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true,
        itemName:"",
        itemDescription:""
    }

   
      loadHaves = () => {
        API.getHaves()
          .then(res =>
            this.setState({ haves: res.data, itemName: "", itemDescription: "" })
          )
          .catch(err => console.log(err));
      };

    componentDidMount() {
        this.loadHaves();
        this.loading();

    }
    
  }

  export default Barter;
