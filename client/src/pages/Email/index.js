import React, { Component } from "react";
import "./email.scss";
// import axios from "axios";
// import { Email, Item, Span, A, Box, renderEmail } from "react-html-email"
// import { brotliDecompress } from "zlib";

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import API from "../../utils/API";
import { Container } from "../../components/Grid";


class Email extends Component {

    state = {
        name: "",
        email: "",
        message: ""
    }

    handleInputChange = event => {
        const {name,value} = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.email) {
            API.sendEmail({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
            .then(res => console.log("success", res))    
            .catch(err => console.log(err));
        }
        this.setState({
            name: "",
            email: "",
            message: ""
        });

    };
    render() {
        return (
            <Container className="emailBox">
            <Form style= {{width:"600px", marginLeft: "350px", position: "inherit", marginTop:"70px"}}>
                <FormGroup>
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="name"
                    value={this.state.name}
                    onChange={thishandleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Your Email</Label>
                    <Input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label hFmlfor="message">Message</Label>
                    <Input 
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="message"
                    value={this.state.message}
                    onChange={this.handleInputChange} />
                </FormGroup>
                <Button onClick = {this.handleFormSubmit}>Send Email</Button>
            </Form>
            </Container>

        );
    }
}
export default Email;
