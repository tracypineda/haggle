import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import {Input, TextArea, FormBtn} from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API"

class Profile extends Component {
    state = {
        isLoggedIn: false,
        user: null,
        loading: true,
        itemName: "",
        itemDescription: ""
    }

    componentDidMount() {

        this.loading();
        this.loadHaves();

        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).catch(err => {
            console.log(err);
        });

        console.log(this.props)
    }

    loading() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormHaveSubmit = event => {
        event.preventDefault();
        if (this.state.itemName && this.state.itemDescription) {
            API.createHaves({
                itemName: this.state.itemName,
                itemDescription: this.state.itemDescription
            })
                .then(res => API.getHaves())
                .catch(err => console.log(err));
        }
    };

    handleFormWantSubmit = event => {
        event.preventDefault();
        if (this.state.itemName && this.state.itemDescription) {
            API.createWants({
                itemName: this.state.itemName,
                itemDescription: this.state.itemDescription
            })
                .then(res => API.getWants())
                .catch(err => console.log(err));
        }
    };

    loadHaves = () => {
        API.getHaves()
            .then(res =>
                this.setState({ haves: res.data, itemName: "", itemDescription: "", user: "" })
            )
            .catch(err => console.log(err));

    };

    deleteHave = id => {
        API.deleteHave(id)
            .then(res => this.loadHaves())
            .catch(err => console.log(err));

    };


    render() {
        return (
            <Container fluid>
                <Row>
                    {this.state.loggedIn ? (
                        <>
                            <Col size="md-6">
                                <div className="profilePage">
                                    <div className="profileBox">
                                        <Jumbotron>
                                            <h1 id="userTitle">Welcome {this.state.user.username}</h1>
                                        </Jumbotron>
                                        <form>
                                            <Input name="itemName"
                                                placeholder="ItemName (required)"
                                                value={this.state.itemName}
                                                onChange={this.handleInputChange} />
                                            <TextArea name="itemDescription"
                                                placeholder="ItemDescription (Optional)"
                                                value={this.state.itemDescription}
                                                onChange={this.handleInputChange} />
                                            <FormBtn id="haveButton"
                                                onClick={this.handleFormHaveSubmit}
                                                disabled={!(this.state.itemName && this.state.itemDescription)}
                                            >Submit Have</FormBtn>
                                            <FormBtn id="wantButton"
                                                onClick={this.handleFormWantSubmit}
                                                disabled={!(this.state.itemName && this.state.itemDescription)}
                                            >Submit Want</FormBtn>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                            <Col size="md-6 sm-12">
                                <Jumbotron>
                                    <h1>My Haves</h1>
                                </Jumbotron>
                                {this.state.haves.length ? (
                                    <List>
                                        {this.state.haves.map(have => (
                                            <ListItem key={have._id}>
                                                <strong>{have.itemName} haggled by {have.user}</strong>
                                                <DeleteBtn onClick={() => this.deleteHave(have._id)} />
                                            </ListItem>
                                        ))}
                                    </List>
                                ) : (
                                    <h3>No Results to Display</h3>
                                )}
                            </Col>
                        </>
                    ) : (
                        <Col>
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
                    )}
                </Row >
            </Container >
        )
    }
}

    export default Profile;