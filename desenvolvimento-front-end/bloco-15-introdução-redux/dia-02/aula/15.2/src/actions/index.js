export const SELECT_MOVIE = 'SELECT_MOVIE';

export const selectMovie = (movie) => ({
  type: SELECT_MOVIE,
  movie,
});