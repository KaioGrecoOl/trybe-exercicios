import React, {Component} from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const task = ['Acordar', 'Ir academia', 'Tomar Cafê', 'Tomar banho', 'Trabalhar', 'Retornar casa', 'Jantar', 'Dormir']

class App extends Component {
  render() { 
  return (<ul>{ task.map(index => Task(index)) }</ul>
  );
 }
}

export default App;
