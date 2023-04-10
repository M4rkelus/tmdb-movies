import React from 'react';

import './MovieCard.styles.css';

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, release_date, vote_average } = movie;

  const rating = Math.round(vote_average * 10) / 10;

  return (
    <li className='movie-item' key={id}>
      <a className='movie-link' href={`/movie/${id}`}>
        <div className='movie-rating'>
          <div className='movie-rating-circle'>
            <span className='movie-rating-number'>{rating}</span>
          </div>
        </div>
        <img
          className='movie-poster'
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : require('../../assets/placeholder.jpg')
          }
          alt={title}
        />
        <span className='movie-title'>{title}</span>
        <span className='movie-release-date'>{release_date?.slice(0, 4)}</span>
      </a>
    </li>
  );
};

export default MovieCard;
