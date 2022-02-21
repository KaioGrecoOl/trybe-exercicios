import React, { Component } from "react";
import "./App.css";
import TvShow from "./components/TvShow";

class App extends Component {
  render() {
    return (
      <main>
        <h1>🍿 Fantástica Fábrica - Séries</h1>
        <section>
          <TvShow />
        </section>
      </main>
    );
  }
}

export default App;
