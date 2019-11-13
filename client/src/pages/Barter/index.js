
import React, { Component } from "react";
import "./Barter.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"
import API from '../Auth';

class Barter extends Component {
  state = {
    loggedIn: false,
    user: null,
    wants: "",
    haves: "",
    itemName: "",
    itemDescription: ""
  }
      componentDidMount() {
        this.loadHaves();
        //this.loadng();

      }

      loadHaves = () => {
        API.getHaves()
          .then(res =>
            this.setState({ haves: res.data, itemName: "", itemDescription: "" })
          )
          .catch(err => console.log(err));
      };

      
      render() {
        return (
          <div>

          </div>
        )
      }

    }

  
    export default Barter;
