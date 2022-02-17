import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];


class Content extends Component {
  render() {
    return (
      <span className="content">{
        conteudos.map((data) => (
          <div key={data.conteudo} className="card">
            <h4>{`O conteudo é: ${data.conteudo}`}</h4>
            <h3>{`status: ${data.status}`}</h3>
            <h3>{`bloco: ${data.bloco}`}</h3>
          </div>
        ))}
      </span>
    ); 
  }
}

export default Content;