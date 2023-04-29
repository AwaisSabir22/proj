import { createStore, combineReducers } from 'redux';
import moviesReducer from './Reducers/moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(rootReducer);

export default store;
