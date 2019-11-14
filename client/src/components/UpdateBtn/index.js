import React from "react";
import "./updatebtn.scss";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function UpdateBtn(props) {
  return (
    <span className="update-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}
export default UpdateBtn;