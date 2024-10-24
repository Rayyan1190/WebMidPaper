// FavoritesPage.js
import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const FavoritesPage = () => {
  const { favorites } = useContext(MovieContext);

  return (
    <div>
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        favorites.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
