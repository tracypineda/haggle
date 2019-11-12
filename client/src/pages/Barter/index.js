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
        setTimeout(()=> {
            this.setState({
                loading: false
            })
        }, 1000)  
    }


    render() {
        return (
            <div className="barterPage">
                {this.state.loggedIn ? (
                    <div className="barterBox">
                        <h1 id="userTitle">Welcome {this.state.user.username}</h1>
                        
                    </div>
                ) : (
                    <div className="noUser">
                        {!this.state.loading ? (
                            <>
                                <h1>please log in</h1>
                                <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                            </>
                        ) : (
                            <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
                        )}
                    </div> 
                )}
            </div>
        )
    }
}

export default Barter;
