import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import '../css/Inicio.css';
import { getActionMovies, getTrendingMovies, getUpcomingMovies, searchMovies } from '../functions/funciones';

const Inicio = () => {
  const [accion, setAccion] = useState([]);
  const [trending, setTrending] = useState([]);
  const [estrenos, setEstrenos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const actionMovies = await getActionMovies();
      const trendingMovies = await getTrendingMovies();
      const upcomingMovies = await getUpcomingMovies();
      setAccion(actionMovies);
      setTrending(trendingMovies);
      setEstrenos(upcomingMovies);
    };
    fetchData();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const results = await searchMovies(searchTerm);
    setSearchResults(results);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className="main-container">
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="Buscar..." value={searchTerm} onChange={handleChange} />
            <button type="submit">Buscar</button>
          </form>
        </div>
        {searchResults.length > 0 && (
          <div className="search-results-container">
            {searchResults.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movie-details">
                  <h3>{movie.title}</h3>
                  <p>Fecha de lanzamiento: {movie.release_date}</p>
                  <p>Promedio de votos: {movie.vote_average}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="left-section">
          <div className="estrenos-container">
            <h2>Estrenos</h2>
            {estrenos.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movie-details">
                  <h3>{movie.title}</h3>
                  <p>Fecha de lanzamiento: {movie.release_date}</p>
                  <p>Promedio de votos: {movie.vote_average}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-section">
          <div className="movie-section">
            <h2>Acción</h2>
            <div className="movie-row">
              {accion.map((movie) => (
                <div className="movie-card" key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-details">
                    <h3>{movie.title}</h3>
                    <p>Fecha de lanzamiento: {movie.release_date}</p>
                    <p>Promedio de votos: {movie.vote_average}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="movie-section">
            <h2>Tendencias</h2>
            <div className="movie-row">
              {trending.map((movie) => (
                <div className="movie-card" key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-details">
                    <h3>{movie.title}</h3>
                    <p>Fecha de lanzamiento: {movie.release_date}</p>
                    <p>Promedio de votos: {movie.vote_average}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
