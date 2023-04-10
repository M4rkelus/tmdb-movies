import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MovieDetails from '../../components/MovieDetails/MovieDetails.component';
import Loader from '../../components/Loader/Loader.component';

import { fetchMovieDetails } from '../../services/api';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const movieDetails = await fetchMovieDetails(id);
        setMovie(movieDetails.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovieData();
  }, [id]);

  return <>{movie ? <MovieDetails movie={movie} /> : <Loader />}</>;
};

export default MovieDetailsPage;
