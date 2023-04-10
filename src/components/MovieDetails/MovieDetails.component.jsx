import React from 'react';

import './MovieDetails.styles.css';

const MovieDetails = ({ movie }) => {
  return (
    <div className='movie-details'>
      <img
        className='movie-details-poster'
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : require('../../assets/placeholder.jpg')
        }
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
};

export default MovieDetails;
