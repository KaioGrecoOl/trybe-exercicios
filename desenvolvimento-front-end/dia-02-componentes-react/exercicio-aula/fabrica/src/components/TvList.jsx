import React, { Component } from "react";
import catalog from '../data';
import TvShow from "./TvShow";

class TvList extends Component {
  render() {
    return (
      <section>
        {catalog.map((tvShow) => {
          return <TvShow tvShow={tvShow} />;
        })}
      </section>
    );
  }
}

export default TvList;