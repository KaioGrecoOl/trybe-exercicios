import React, { Component } from "react";

class NomeCompleto extends Component {
  render() {

    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 30) error = "Nome muito grande!"

    return (
    <label>
      Nome:
      <input
        value={value}
        onChange={handleChange}
        type="text"
        name="nomeCompleto"
      />

      <span>{error ? error : ''}</span>
    </label>
    );
  }
}

export default NomeCompleto;