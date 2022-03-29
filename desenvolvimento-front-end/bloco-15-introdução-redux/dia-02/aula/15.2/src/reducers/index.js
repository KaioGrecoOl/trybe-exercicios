import data from '../data';
import { SELECT_MOVIE } from '../actions';

const INITIAL_STATE = {
  categories: data,
  selectedMovie: data[0].movies[1],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SELECT_MOVIE:
    return {
      ...state,
      selectedMovie: action.movie,
    };
  default:
    return state;
  }
};

export default reducer;