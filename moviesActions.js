import axios from 'axios';

export const fetchMoviesRequest = () => {
  return {
    type: 'FETCH_MOVIES_REQUEST',
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: 'FETCH_MOVIES_FAILURE',
    payload: error,
  };
};

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios
      .get('https://reactnative.dev/movies.json')
      .then((response) => {
        const movies = response.data.movies;
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchMoviesFailure(errorMsg));
      });
  };
};
