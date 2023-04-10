import axios from 'axios';

const API_KEY = '3d88ffc495dde11b1e897ac2e47b9b1a';
const API_BASE_URL = 'https://api.themoviedb.org/3';

const tmdbAPI = axios.create({
  baseURL: API_BASE_URL,
});

const fetchMovies = (category, page) =>
  tmdbAPI.get(`/movie/${category}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: page,
    },
  });

const searchMovies = (query, page) =>
  tmdbAPI.get('/search/movie', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query: query,
      page: page,
    },
  });

const fetchMovieDetails = (movieId) =>
  tmdbAPI.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

const fetchPopularActors = (page) =>
  tmdbAPI.get('/person/popular', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: page,
    },
  });

const searchActors = (query, page) =>
  tmdbAPI.get('/search/person', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query: query,
      page: page,
    },
  });

const fetchActorDetails = (actorId) =>
  tmdbAPI.get(`/person/${actorId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

export {
  fetchMovies,
  searchMovies,
  fetchMovieDetails,
  fetchPopularActors,
  searchActors,
  fetchActorDetails,
};
