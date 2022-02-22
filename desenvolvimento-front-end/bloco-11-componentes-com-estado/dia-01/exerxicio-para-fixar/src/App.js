import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeCliques: 0,
      test2: 0,
    };
  }

  handleClick() {
    this.setState((estadoAnterior,_props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  handleClick2() {
    this.setState(({ test2 }) => ({
      test2: test2 + 1,
    }));
  }

  handleClick3() {
    console.log("Cliclou3!");
  }

  buttonColor(index) {
    return index % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { test2 } = this.state;
    return (
      <main>
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
        <button onClick={this.handleClick2} style={{ backgroundColor: this.buttonColor(test2) }}>Meu botão2 = { test2 } </button>
        <button onClick={this.handleClick3}>Meu botão3</button>
      </main>
    );
  }
}

export default App;
