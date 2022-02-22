import React, { Component } from "react";
import PropTypes from 'prop-types';
import propTypes from "prop-types";

class TvShow extends Component {
  render() {
    const { tvShowInfo } = this.props;

    return (
      <article>
        <h2>Título da Série: {tvShowInfo.name}</h2>
        <img src={tvShowInfo.image} alt={tvShowInfo.name} />
        <p>Gênero: {tvShowInfo.genre}</p>
        <p>
          Personagens:{" "}
          {tvShowInfo.characters.map((name, index) => (
            <small key={index}>{name} | </small>
          ))}
        </p>
        <p>
          <strong>Informações:</strong>{" "}
          <small>{tvShowInfo.info.seasons} | {tvShowInfo.info.episodes}</small>
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
