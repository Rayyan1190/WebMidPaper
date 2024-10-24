// MovieDetailsPage.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from './MovieContext';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { addToFavorites } = useContext(MovieContext);

  // Fetch movie details using the id (mocked here)
  const movie = { id, title: 'Inception', releaseDate: '2010', rating: '8.8' };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
      <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
    </div>
  );
};

export default MovieDetailsPage;