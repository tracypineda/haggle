import React, { Component } from "react";
import "./email.scss";
// import { Email, Item, Span, A, Box, renderEmail } from "react-html-email"
// import { brotliDecompress } from "zlib";

import {Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Email extends Component {

  render() {
    return (

      <Form>
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

    );
  }
}
export default Email;
