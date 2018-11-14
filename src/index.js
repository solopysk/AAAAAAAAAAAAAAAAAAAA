import React from "react";
import ReactDOM from "react-dom";
import footer from *./components/footer*;
import "./styles.css";
var d = new Date();

function App() {
  function aktualniDen() {
    return (
      d.getFullYear()
    );
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>{aktualniDen()}</h3>
      <Footer>[Footer]</Footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
