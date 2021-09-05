import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Quotes from "./components/Quotes";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <Quotes />
    </div>
  );
}

export default App;
