import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      base: '',
    }
    // this.fetchDog = this.fetchDog.bind(this);
  }
  componentDidMount() {
    this.fetchDog();
  }

  fetchDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      this.setState({base: data})
    })
  }
  render() {
    if (this.state.base === "") return "Loading...";
    return (
      <main>
        <img src={ this.state.base.message } alt='imgdog'></img>
        <p>cachorros!</p>
        <button onClick={this.fetchDog}>Oi</button>
      </main>
    )
  }

}

export default App;
