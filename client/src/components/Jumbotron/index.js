import React from "react";


function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
       className="jumbotron">
        <h1>Your Project</h1>
        <img src=""
        <p>
          Enim adipisicing enim reprehenderit ex ullamco consectetur Lorem laboris magna
          exercitation. Aliquip reprehenderit magna elit cillum adipisicing dolore aliquip velit.
          Ipsum ullamco nostrud tempor eu deserunt ipsum incididunt fugiat esse ipsum. Exercitation
          nostrud exercitation sit ex nostrud aliqua officia magna nostrud deserunt et esse eu
          deserunt. Non dolor consequat qui ea culpa tempor magna nulla consectetur est occaecat.
        </p>
      
    >
      {children}
    </div>
  );
}

export default Jumbotron;
