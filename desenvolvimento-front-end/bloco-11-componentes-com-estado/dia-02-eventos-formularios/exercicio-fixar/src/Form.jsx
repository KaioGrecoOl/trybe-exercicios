import React, { Component } from "react";
import './App.css'

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nomeCompleto: "",
      ident: "",
      escolhaVa: "",
      fale: "",
    }
  }

  handleChange( {target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ 
    [name]: value
  });
  }

  render() {
    const { nomeCompleto, ident, escolhaVa, fale, selecionar } = this.state;

    return (
      <div>
        <h1>Meu Formulário</h1>
        <form className="form">
          <label>
            Nome:
            <input 
            value={nomeCompleto} 
            onChange={this.handleChange} 
            type="text" 
            name="nomeCompleto" 
            />
          </label>

          <label>
            CPF:
            <input 
            type="text" 
            name="ident"
            value={ident}
            onChange={this.handleChange}
            />
          </label>

          <label> Escolha um dos valores: 
            <select 
            name="escolhaVa"
            value={escolhaVa}
            onChange={this.handleChange} 
            >
              <option 
              value="valo1">Valor 1</option>
              <option 
              value="valo2">Valor 2</option>
            </select>
          </label>

          <label>
            {" "}
            Fale sobre você:
            <textarea 
            name="fale"
            value={fale}
            onChange={this.handleChange}
            />
          </label>

          <span>
            <input 
            type="checkbox"
            name="selecionar"
            value={selecionar}
            onChange={this.handleChange}
            />
              Estou de acordo.
          </span>
        </form>
      </div>
    );
  }
}

export default Form;
