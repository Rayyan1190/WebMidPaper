import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Favorites from './Favorites';
import moviesData from './moviesData';
import './index.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredMovies(moviesData);
    } else {
      const filtered = moviesData.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery]);

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  return (
    <Router>
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route
          path="/"
          element={<Home movies={filteredMovies} />}
        />
        <Route
          path="/movie/:id"
          element={<MovieDetails addToFavorites={addToFavorites} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
      </Routes>
    </Router>
  );
}

export default App;