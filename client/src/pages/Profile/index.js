import React, { Component } from 'react';
import { Col, Button, Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";


class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true,
        itemName: "",
        itemDescription: "",
        userName: ""
    }

    componentDidMount() {

        this.loading();
        this.loadHaves();
        this.loadWants();

        API.isLoggedIn()
            .then(user => {
                if (user.data.loggedIn) {
                    this.setState({
                        loggedIn: true,
                        user: user.data.user
                    });
                    console.log("userinformation", this.state.user)
                }
            })
            // .then(response => {
            //     console.log("Calling API WANTS - Profile", this.state.user.username)
            //     this.loadWants(this.state.user.username)
            // })
            // .then(response => {
            //     console.log("calling API HAVES - Profile", this.state.user.username)
            //     this.loadHaves(this.state.user.username)
            // })
            .catch(err => {
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
            console.log(this.state.user.username)
            API.createHaves({
                itemName: this.state.itemName,
                itemDescription: this.state.itemDescription,
                user: this.state.user.username,
                userName: this.state.userName
            })
                .then(res => API.getHaves())
                .catch(err => console.log(err));

        }
        this.setState({
            itemName: "",
            itemDescription: "",
            userName: ""
        })
    };
    // resetForm = () => {
    //     this.setState({ itemName: '', itemDescription: '', userName: '' });
    // }

    handleFormWantSubmit = event => {
        event.preventDefault();

        if (this.state.itemName && this.state.itemDescription) {
            console.log(this.state.user.username)
            API.createWants({
                itemName: this.state.itemName,
                itemDescription: this.state.itemDescription,
                user: this.state.user.username,
                userName: this.state.userName
            })
                .then(res => API.getWants())
                .catch(err => console.log(err));
        }
        this.setState({
            itemName: "",
            itemDescription: "",
            userName: "",
            contactPreference: ""
        })
    };

    loadHaves = () => {
        API.getHaves()
            .then(res => {

                this.setState({ haves: res.data, itemName: "", itemDescription: "" })
                console.log("getHaves", res.data)
                // console.log("userinfo", username)
            })
            .catch(err => console.log(err));

    };

    loadWants = () => {
        // console.log("api getUserWants", username)
        API.getWants()
            .then(res =>
                this.setState({ wants: res.data, itemName: "", itemDescription: "" })
            )
            .catch(err => console.log(err));

    };

    deleteHave = id => {
        API.deleteHave(id)
            .then(res => this.loadHaves())
            .catch(err => console.log(err));

    };

    deleteWants = id => {
        API.deleteWant(id)
            .then(res => this.loadWants())
            .catch(err => console.log(err));

    };


    render() {
        return (
            <Container fluid>
                <Row>
                    {this.state.loggedIn ? (
                        <>
                            <Col md={4} >
                                <div className="profilePage">
                                    <div className="profileBox">
                                        <Jumbotron>

                                            <h1 id="userTitle"><strong>Welcome{this.state.user.username}</strong> </h1>
                                        </Jumbotron>
                                        <form >
                                            <Input name="itemName"
                                                placeholder="ItemName (required)"
                                                value={this.state.itemName}
                                                onChange={this.handleInputChange} />
                                            <Input name="userName"
                                                placeholder=" User Name (required)"
                                                value={this.state.userName}
                                                onChange={this.handleInputChange} />
                                            <TextArea name="itemDescription"
                                                placeholder="ItemDescription (Optional)"
                                                value={this.state.itemDescription}
                                                onChange={this.handleInputChange} />
                                            <Input name="contactPrefernce"
                                                placeholder="contactPreference (required)"
                                                value={this.state.itemDescriptioncontactPrefernce}
                                                onChange={this.handleInputChange} />
                                            <FormBtn id="haveButton"
                                                onClick={this.handleFormHaveSubmit}
                                                disabled={!(this.state.itemName && this.state.itemDescription)}
                                            ><strong>Submit Have</strong></FormBtn>
                                            <FormBtn id="wantButton"
                                                onClick={this.handleFormWantSubmit}
                                                disabled={!(this.state.itemName && this.state.itemDescription)}
                                            ><strong>Submit Want</strong></FormBtn>
                                        </form>
                                    </div>
                                </div>
                            </Col>



                            <Col md={4} >
                                <Jumbotron style={{ backgroundColor: "lightgrey" }}>
                                    <h1><strong>My Haves</strong> </h1>
                                    <p style={{fontSize: "15px"}}> What items do you have? </p>
                                    <p style={{fontSize: "15px"}}>List the Items Below...</p>
                                </Jumbotron>
                                {this.state.haves.length ? (
                                    <List>
                                        {this.state.haves.map(have => (
                                            <ListItem key={have._id}>
                                                <strong>{have.itemName}</strong> Description: <strong>{have.itemDescription}</strong> Haggled by <strong> {have.userName}</strong>....
                                                <DeleteBtn onClick={() => this.deleteHave(have._id)} />
                                            </ListItem>
                                        ))}
                                    </List>
                                ) : (
                                        <h3>No Results to Display</h3>
                                    )}
                            </Col>




                            <Col md={4} >
                                <Jumbotron style={{ backgroundColor: "darkGrey" }}>
                                    <h1><strong>My Wants</strong></h1>
                                    <p style={{fontSize: "15px"}}> What items do you want? </p>
                                    <p style={{fontSize: "15px"}}>List the Items Below...</p>
                                </Jumbotron>
                                {this.state.wants.length ? (
                                    <List>
                                        {this.state.wants.map(want => (
                                            <ListItem key={want._id}>
                                                <strong>{want.itemName}</strong> Description: <strong>{want.itemDescription}</strong> Haggled by <strong>{want.userName}</strong>....
                                                <DeleteBtn onClick={() => this.deleteWant(want._id)} />
                                            </ListItem>
                                        ))}
                                    </List>
                                ) : (
                                        <h3>No Results to Display</h3>
                                    )}
                            </Col>

                        </>
                    ) : (
                            <Col md={12}>
                                <div className="noUser">
                                    {!this.state.loading ? (
                                        <>
                                            <h1>please log in</h1>
                                            <Link className="loginLink" to="/login">
                                                <Button className="loginBtn" color="info" block>Login</Button>
                                            </Link>
                                        </>

                                    ) : (
                                            <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading" />
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