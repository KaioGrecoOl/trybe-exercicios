import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
      const { pokemons } = this.props;
        return (
            <div>
                {pokemons.map(element => <Pokemon key={element.id} pokemon={element} />)}
            </div>
        );
    }
}

export default Pokedex;