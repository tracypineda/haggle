import React from "react";
import "./email.scss";
import { Email, Item, Span, A, Box, renderEmail } from "react-html-email"
import { brotliDecompress } from "zlib";

class emailHTML extends Component {

render() {
  
  return (
    <div className= "email">
    <Email title="Email Testing">
      <Item align= "center">
        <Span fontSize={20}>This is an Email</Span>
      </Item>
      <Item>
        <Box cellSpacing={20} width="100%"  height="50%" style={{ borderTop: '3px solid black' }}>
          <Item>
            <Span color="black" lineHeight={20}></Span>
            
          </Item>
        </Box>
      </Item>
    </Email>
    </div>
  );
}
}


export default emailHTML; 