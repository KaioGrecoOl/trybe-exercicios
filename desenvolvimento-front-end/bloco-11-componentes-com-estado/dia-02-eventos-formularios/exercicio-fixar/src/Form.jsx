import React, { Component } from "react";
import './App.css'

class Form extends Component {
  constructor() {
    super()

    this.handleName = this.handleName.bind(this);

    this.state = {
      name: "",
    }
  }

  handleName(event) {
    this.setState({ name: event.target.value } );
  }

  render() {
    return (
      <div>
        <h1>Meu Formulário</h1>
        <form className="form">
          <label>
            Nome:
            <input 
            value={this.state.name} 
            onChange={this.handleName} 
            type="text" name="name" 
            />
          </label>

          <label>
            CPF:
            <input type="text" name="id" />
          </label>

          <label> Escolha um dos valores: 
            <select name="select">
              <option value="valo1">Valor 1</option>
              <option value="valo2">Valor 2</option>
            </select>
          </label>

          <label>
            {" "}
            Fale sobre você:
            <textarea name="fale" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
