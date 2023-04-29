// ./actions/movies.js

import axios from 'axios';
import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from '../store/movies';

export const fetchMovies = () => async (dispatch) => {
  dispatch(fetchMoviesStart());

  try {
    const response = await axios.get(
      'https://reactnative.dev/movies.json'
    );

    dispatch(fetchMoviesSuccess(response.data.movies));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};
