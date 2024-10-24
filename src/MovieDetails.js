import React from 'react';
import { useParams } from 'react-router-dom';
import moviesData from './moviesData';

function MovieDetails({ addToFavorites }) {
  const { id } = useParams();
  const movie = moviesData.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
      <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
    </div>
  );
}

export default MovieDetails;