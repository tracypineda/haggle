import React, { Component } from "react";
import "./Barter.scss";
import { Col, Button, Jumbotron } from "reactstrap";
import { Email, Item, Span, A, renderEmail } from "react-html-email"
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
// import { Col } from "../../components/Grid";
// import Email from "../../components/Email";

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
                this.setState({ haves: res.data, itemName: "", itemDescription: "" })
            )
            .catch(err => console.log(err));
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    
                        <Col md={6}>
                            <Jumbotron>
                                <h1>Items Up For Haggle... </h1>
                            </Jumbotron>
                            {this.state.haves.length ? (
                              <>
                                <List>
                                    {this.state.haves.map(have => (
                                        <ListItem key={have._id}>
                                            <strong> Item Name: {have.itemName} Item Description: {have.itemDescription} haggled by; {have.user}</strong>
                                            <Button onClick={() => this.deleteHave(have._id)} />
                                        </ListItem>
                                    ))}
                                </List>
                                </>
                            ) : (
                                <h3>No Results to Display</h3>
                            )}
                        </Col>
                        <Col md={6}>
                            {this.state.haves.length ? (
                                <>
                                    <Jumbotron>
                                        <h1>Email the Haggler...</h1>
                                    </Jumbotron>
                                    <Email>
                                        <h3> coming soon</h3>
                                    </Email>
                                </>
                            ) : null}
                        </Col>
                    
                </Row>
                <Row>
                    <Col md={8}>
                        <div className="noUser">
                            {!this.state.loading ? (
                                <>
                                    <h1>please log in</h1>
                                    <Link className="loginLink" to="/login">
                                        <Button className="loginBtn" color="info" block>Login</Button>
                                    </Link>
                                </>
                            ) : (
                                <img id="loadingIcon" src="https://giphy.com/gifs/loading-11ASZtb7vdJagM" alt="loading" />
                            )}
                        </div>
                    </Col>
                </Row>
            </Container >
        )
    }
}


export default Barter;