import React, { Component } from "react";
import "./App.css";
import TvShow from "./components/TvShow";
import catalog from './data';

class App extends Component {
  render() {
    return (
      <main>
        <h1>🍿 Fantástica Fábrica - Séries</h1>
        <section>
          {catalog.map((tvShow) => {
            return (
            <TvShow tvShow={tvShow}  />
            )
          })
          }
        </section>
      </main>
    );
  }
}

export default App;
