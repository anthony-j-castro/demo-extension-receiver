import React from "react";
import logo from "./logo.svg";
import { Link } from "@tanstack/router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/recipe">Recipe Viewer</Link>
      </header>
    </div>
  );
}

export default App;
