import React, { useEffect, useState } from 'react';
import { fetchMoviesByCategory } from '../../api';
import './MovieList.styles.css';

function MovieList({ category }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchMoviesByCategory(category);
      setMovies(movies);
    };
    fetchData();
  }, [category]);

  return (
    <div className='movie-list-container'>
      <h2 className='movie-list-title'>{category} movies</h2>
      <ul className='movie-list'>
        {movies.map((movie) => (
          <li className='movie-item' key={movie.id}>
            <a className='movie-link' href={`/movies/${movie.id}`}>
              <img
                className='movie-poster'
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <span className='movie-title'>{movie.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
