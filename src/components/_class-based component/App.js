import React, { Component } from "react";
import "./App.css";
import NavBar from "./layout/NavBar";
import Users from "./users/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
