
import React, { Component } from "react";
import "./Barter.scss";
import { Col,Button, Jumbotron } from "reactstrap";
// import { Link } from "react-router-dom"
import API from "../../utils/API";
import {List,ListItem} from "../../components/List";
// import { Col } from "../../components/Grid";


class Barter extends Component {
  state = {
    loggedIn: false,
    user: null,
    wants: [],
    haves: [],
    itemName: "",
    itemDescription: ""
  }
  componentDidMount() {
    API.getHaves()
    .then(res => 
      this.setState({ haves: res.data, itemName: "", itemDescription: "", user: ""})
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <>
        <Col md ={12}>
          <Jumbotron>
            <h1>Items Up For Haggle... </h1>
          </Jumbotron>
          {this.state.haves.length ? (
            <List>
              {this.state.haves.map(have => (
                <ListItem key= {have._id}>
                  <strong> Item Name: {have.itemName} Item Description: {have.itemDescription} haggled by; {have.user}</strong>
                  <Button onClick={() => this.deleteHave(have._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>

      </>
    )
  }

}


export default Barter;
