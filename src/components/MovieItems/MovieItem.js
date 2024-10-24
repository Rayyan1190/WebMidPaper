import { Link } from 'react-router-dom';

function MovieItem({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
      <Link className='anchor' to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
}

export default MovieItem;
