import React from "react";
import "./form.scss";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control text-control"  {...props} />
    </div>

  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control text-control" rows="10" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="buttonButton">
      {props.children}
    </button>
  );
}


    // <button {...props} style={{ display: "flex", marginBottom: 10 }} className="buttonButton">
    //   {props.children}
    // </button>
