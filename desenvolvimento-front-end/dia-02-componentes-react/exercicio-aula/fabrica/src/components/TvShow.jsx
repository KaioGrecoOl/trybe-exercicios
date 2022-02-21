import React, { Component } from "react";
import PropTypes from 'prop-types';
import propTypes from "prop-types";

class TvShow extends Component {
  render() {

    const {tvShow} = this.props;

    return (
      <article>
        <h2>Título da Série: {tvShow.name}</h2>
        <img src={tvShow.image} alt={tvShow.name} />
        <p>Gênero: {tvShow.genre}</p>
        <p>
          Personagens: {tvShow.characters.map(
            (character) => {
            return <strong>{`${character} |`}</strong>;
          })}
        </p>
      </article>
    );
  }
}

TvShow.propTypes = {
  tvShow: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    genre: PropTypes.string,
    characters: PropTypes.arrayOf(PropTypes.string),
    info: PropTypes.shape({
      seasons: PropTypes.string,
      episodes: propTypes.number
    })
  }).isRequired
}

export default TvShow;
