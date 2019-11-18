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
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.email) {
            API.sendEmail({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
                .catch(err => console.log(err));
        }

    };
    render() {
        return (
            <Container className="emailBox">
            <Form style= {{width:"600px", marginLeft: "350px", position: "inherit", marginTop:"70px"}} onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="name">Your Name</Label>
                    <Input type="text" name="name" id="name" placeholder="name" value={this.props.name} onChange={this.props.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Your Email</Label>
                    <Input type="email" name="email" id="email" placeholder="email" value={this.props.email} onChange={this.props.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input type="textarea" name="message" id="message" placeholder="message" value={this.props.message}
                        onChange={this.props.handleInputChange} />
                </FormGroup>
                <Button>Send Email</Button>
            </Form>
            </Container>

        );
    }
}
export default Email;
