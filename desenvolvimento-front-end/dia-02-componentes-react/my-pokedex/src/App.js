import React, { Component } from 'react';
import './App.css';
import { pokemons } from './data';
import Pokemon from './Pokemon'
import Pokedex from './Pokedex';
// console.log(pokemons);

class App extends Component {
  render() {
    return (
      <div>
        <h1 className='title'>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
