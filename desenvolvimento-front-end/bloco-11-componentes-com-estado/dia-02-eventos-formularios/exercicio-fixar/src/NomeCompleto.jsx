import React, { Component } from "react";

class NomeCompleto extends Component {
  render() {

    const { value, handleChange } = this.props;
    
    return (
    <label>
      Nome:
      <input
        value={value}
        onChange={handleChange}
        type="text"
        name="nomeCompleto"
      />
    </label>
    );
  }
}

export default NomeCompleto;