import React, { Component } from "react";
import catalog from "../data";
import TvShow from "./TvShow";

class TvList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterName: ""
    }
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    // console.log(event.target.value);
    this.setState({
      filterName: event.target.value
    })

  }

  render() {
    console.log(this.state.filterName);
    return (
      <div>
        <input type="text" name="filterName" onChange={this.handleFilter} />
        <section>
          {catalog.map((tvShow) => (
            <TvShow key={tvShow.id} tvShowInfo={tvShow} />
          ))}
        </section>
      </div>
    );
  }
}
export default TvList;
