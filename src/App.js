import React, { Component } from "react";
import FriendsApp from "./components/FriendsApp/FriendsApp";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsApp title="Friends App" />
      </div>
    );
  }
}

export default App;
