import React, { Component } from "react";
import "./App.css";
import TvList from "./components/TvList";

class App extends Component {
  render() {
    return (
      <main>
        <h1>🍿 Fantástica Fábrica - Séries</h1>
        <TvList />
        
      </main>
    );
  }
}

export default App;
