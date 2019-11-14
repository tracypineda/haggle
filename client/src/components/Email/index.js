import React from "react";
import "./email.scss";
import { Email, Item, Span, A, renderEmail } from "react-html-email"
import { brotliDecompress } from "zlib";

const emailHTML = renderEmail (
    <Email title="Hello World!">
        <Item align="center">
            <Span fontSize={20}>
                This is an email;
                
            </Span>
        </Item>
    </Email>
)
// const textStyles ={
// fontFamily:$text-font,
// fontSize: 40,
// fontWeight: 'bold',
// color:$dark-text 

// }



export default emailHTML; 