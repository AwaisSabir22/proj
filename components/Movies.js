import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../moviesActions';
import styles from '../styles/MoviesStyle';

const Movies = () => {
  const dispatch = useDispatch();
  const moviesState = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const renderMovies = () => {
    if (moviesState.loading) {
      return <Text>Loading...</Text>;
    }

    if (moviesState.error) {
      return <Text>{moviesState.error}</Text>;
    }

    return moviesState.movies.map((movie) => (
      <View key={movie.id}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text>{movie.releaseYear}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Movies</Text>
      {renderMovies()}
    </View>
  );
};

export default Movies;
