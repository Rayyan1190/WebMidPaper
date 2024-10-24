import React from 'react';
import MovieList from './components/MovieList/MovieList';

function Home({ movies }) {
  return (
    <div>
      <h2>Trending Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;