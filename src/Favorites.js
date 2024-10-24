import React from 'react';
import MovieList from './components/MovieList/MovieList';

function Favorites({ favorites }) {
  return (
    <div>
      <h2>Your Favorite Movies</h2>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} />
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
}

export default Favorites;
