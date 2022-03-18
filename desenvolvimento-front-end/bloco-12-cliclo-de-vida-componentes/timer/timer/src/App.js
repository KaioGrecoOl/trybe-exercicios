import React, { Component } from "react";
import Timer from "./components/Timer";

class App extends Component {
  constructor() {
    super();
    console.log('Constructor');

    this.state = {
      showTimer: false
    };

    this.toggleTimer = this.toggleTimer.bind(this);
  }

  toggleTimer() {
    this.setState((prevState) => ({ showTimer: !prevState.showTimer }));
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    const { showTimer } = this.state;
    console.log('Render');

    return (
      <div>
        <header>
          {/* <img src={ logo } alt="logo" /> */}
        </header>
        <main>
          {showTimer ? <Timer /> : null}

          <button type="button" onClick={ this.toggleTimer }>
            {showTimer ? 'Desligar Timer' : 'Ligar Timer'}
          </button>
        </main>
      </div>
    );
  }
}

export default App;