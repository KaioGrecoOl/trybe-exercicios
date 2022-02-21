import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick() {
    console.log("Cliclou!");
  }

  handleClick2() {
    console.log("Cliclou2!", this);
  }

  handleClick3() {
    console.log("Cliclou3!");
  }

  render() {
    return (
      <main>
        <button onClick={this.handleClick}>Meu botão</button>
        <button onClick={this.handleClick2}>Meu botão2</button>
        <button onClick={this.handleClick3}>Meu botão3</button>
      </main>
    );
  }
}

export default App;
