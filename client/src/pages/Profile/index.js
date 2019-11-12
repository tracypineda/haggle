import React, { Component } from "react";
import "./Profile.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import HaveCard  from "../../components/HaveCard"

class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true,
        itemName: "",
        itemDescription: ""
    }

    componentDidMount() {

        this.loading();

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


    render() {
        return (
            <div className="profilePage">
                {this.state.loggedIn ? (
                    <div className="profileBox">
                        <h1 id="userTitle">Welcome {this.state.user.username}</h1>
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

                        <HaveCard title="prop test"> children test </HaveCard>

                    </div>
                ) : (
                        <div className="noUser">
                            {!this.state.loading ? (
                                <>
                                    <h1>please log in</h1>
                                    <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                                </>
                            ) : (
                                    <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading" />
                                )}
                        </div>
                    )}
            </div>
        )
    }
}


export default Profile;