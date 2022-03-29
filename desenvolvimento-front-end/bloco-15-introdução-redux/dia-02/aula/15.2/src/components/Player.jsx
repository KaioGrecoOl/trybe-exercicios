import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    const { title, releasedYear, link } = this.props;
    return (
      <div>
        <h1>
          {title}
        </h1>
        <h3>
          Comédia
          {' '}
          -
          {' '}
          {releasedYear}
        </h3>
        <section>
          <iframe
            title="trailer"
            width="420"
            height="315"
            src={ link }
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.selectedMovie.title,
  releasedYear: state.selectedMovie.released,
  link: state.selectedMovie.link,
});

export default connect(mapStateToProps)(Player);