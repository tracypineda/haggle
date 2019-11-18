import React, { Component } from "react";
import "./Barter.scss";
import { Col, Button, Jumbotron } from "reactstrap";
// import { Email, Item, Span, A, renderEmail } from "react-html-email"
// import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
// import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";
// import { Col } from "../../components/Grid";
import Email from "../../components/Email";

class Barter extends Component {

    state = {
        user: "",
        haves: [],
        itemName: "",
        itemDescription: "",
        userName: ""

    }
    componentDidMount() {
        API.getHaves()
            .then(res =>
                this.setState({ haves: res.data, itemName: "", itemDescription: "", userName: "" })
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
                                            <strong> Item Name: {have.itemName} Item Description: {have.itemDescription} haggled by;
                                             {have.userName}</strong>
                                            <Link className="emailLink" to="/send-email">
                                                <Button className="emailBtn" color="info" block>Email: {have.userName}</Button>
                                            </Link>
                                        </ListItem>
                                    ))
                                    }
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

                                <h3>Email the Haggler by clicking on the button under thier post!</h3>
                                {/* <Link className="emailLink" to="/send-email">
                                    <Button className="emailBtn" color="info" block>Email</Button>
                                </Link> */}
                            </>
                        ) : null}
                    </Col>


                </Row>

                <Row>
                    <Col md={8}>
                        <div className="noUser">
                            {!this.state.loading && this.state.loggedIn ? (
                                <>
                                    <h1>please log in</h1>
                                    <Link className="loginLink" to="/login">
                                        <Button className="loginBtn" color="info" block>Login</Button>
                                    </Link>
                                </>
                    ) : (null
                                    // <img id="loadingIcon" src="https://giphy.com/gifs/loading-11ASZtb7vdJagM" alt="loading" />
                                )}

                        </div>
                    </Col>
                </Row>
            </Container >
        )
    }
}


export default Barter;