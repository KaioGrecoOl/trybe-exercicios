import React, { Component } from "react";

class TvShow extends Component {
  render() {
    const catalog = {
      id: 4,
      name: "Friends",
      image:
        "https://i.ibb.co/C6GmthN/viagensdatalita-friends-seriadofriends-FRIENDS-s-rie-netflix-seriado-warner-seriado-friends25anos.jpg?w=144",
      characters: ["Monica", "Rachel", "Phoebe", "Ross", "Chandler", "Joey"],
      genre: "Comédia",
      info: {
        seasons: "10 temporadas",
        episodes: 236,
      },
    };

    return (
      <article>
        <h2>Título da Série: {catalog.name}</h2>
        <img src={catalog.image} alt={catalog.name} />
        <p>Gênero: {catalog.genre}</p>
        <p>
          Personagens:{" "}
          {catalog.characters.map((character) => {
            return <strong>{`${character} |`}</strong>;
          })}
        </p>
      </article>
    );
  }
}

export default TvShow;
