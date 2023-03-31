import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../../api';

import './MovieDetails.styles.css';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const movie = await fetchMovieById(id);
      setMovie(movie);
    };
    fetchData();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='movie-details'>
      <img
        className='movie-details-poster'
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className='movie-details-info'>
        <h1 className='movie-details-title'>{movie.title}</h1>
        <p className='movie-details-overview'>{movie.overview}</p>
        <p>
          <strong>Released on:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Runtime:</strong> {movie.runtime} minutes
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
