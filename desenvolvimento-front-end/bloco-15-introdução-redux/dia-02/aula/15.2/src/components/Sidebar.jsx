import React from 'react';
import { connect } from 'react-redux';
import { selectMovie, SELECT_MOVIE } from '../actions';

class Sidebar extends React.Component {
  render() {
    const { category, movie, selectNewMovie } = this.props;
    return (
      <aside>
        <div>
          <h3>{category}</h3>
          <ul>
            <li>
              {movie.title}
              {' '}
              was released in
              {' '}
              {movie.released}
              <button
                type="button"
                onClick={ () => selectNewMovie(movie) }
              >
                Select
              </button>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.categories[0].name,
  movie: state.categories[0].movies[0],
});

const mapDispatchToProps = (dispatch) => ({
  selectNewMovie: (selectedMovie) => dispatch(selectMovie(selectedMovie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);