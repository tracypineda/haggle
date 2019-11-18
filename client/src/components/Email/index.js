
// import React, { Component } from "react";
// import "./email.scss";
// import axios from "axios";
// // import { Email, Item, Span, A, Box, renderEmail } from "react-html-email"
// // import { brotliDecompress } from "zlib";

// import {Form, FormGroup, Label, Input, Button } from 'reactstrap';


// class Email extends Component {
// constructor() {
//   super()
//   this.state ={
//     name: "",
//     email: "",
//     message: ""
//   }
// this.handleInputChange = this.handleInputChange.bind(this)
// }

// handleInputChange = e => {
//   this.setState({[e.target.name]: e.target.value})
// }
// async handleSubmit(e) {
//   e.preventDefault()

//   const {name, email, message} = this.state;

//   const form = await axios.post ("/api/send-email", {
//     name,
//     email,
//     message
//   })
// }
//   render() {
//     return (

//       <Form onSubmit={this.handleSubmit}>
//         <FormGroup>
//           <Label for="name">Your Name</Label>
//           <Input type="text" name="name" id="name" placeholder="name" value={this.props.name} onChange={this.props.handleInputChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label for="email">Your Email</Label>
//           <Input type="email" name="email" id="email" placeholder="email" value={this.props.email} onChange={this.props.handleInputChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label for="message">Message</Label>
//           <Input type="textarea" name="message" id="message" placeholder="message" value={this.props.message}
//             onChange={this.props.handleInputChange} />
//         </FormGroup>
//         <Button>Send Email</Button>
//       </Form>

//     );
//   }
// }
// export default Ema
