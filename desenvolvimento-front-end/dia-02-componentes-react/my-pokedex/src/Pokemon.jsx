import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <div className="card">
        <div >
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            {`weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}

export default Pokemon;