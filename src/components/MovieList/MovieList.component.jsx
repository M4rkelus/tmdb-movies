import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectMovies,
  selectLoading,
  selectError,
  selectFilter,
} from '../../store/movies/movies.selectors';

import {
  selectTotalPages,
  selectPage,
} from '../../store/pagination/pagination.selectors';

import {
  selectSearchQuery,
  selectSearchResults,
} from '../../store/search/search.selector';

import { fetchMoviesAsync } from '../../store/movies/movies.actions';
import {
  saveSearchResults,
  searchMoviesAsync,
  setSearchQuery,
} from '../../store/search/search.actions';

import MovieCard from '../MovieCard/MovieCard.component';
import Pagination from '../Pagination/Pagination.component';
import SearchBar from '../SearchBar/SearchBar.component';
import SortFilter from '../SortFilter/SortFilter.component';
import Loader from '../Loader/Loader.component';

import './MovieList.styles.css';

const MovieList = () => {
  const movies = useSelector(selectMovies);
  const searchResults = useSelector(selectSearchResults);
  const searchQuery = useSelector(selectSearchQuery);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectPage);

  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState('top_rated');
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search Movies');

  useEffect(() => {
    if (isFirstRender) {
      dispatch(fetchMoviesAsync(filter, 1));
      dispatch(setSearchQuery(''));
      dispatch(saveSearchResults([]));
      setIsFirstRender(false);
    } else if (searchResults.length > 0) {
      dispatch(searchMoviesAsync(searchQuery, currentPage));

      const url = `/movies/search/${searchQuery}?page=${currentPage}`;
      window.history.pushState({ path: url }, '', url);
    } else {
      dispatch(fetchMoviesAsync(filter, currentPage));
    }
  }, [dispatch, filter, currentPage]);

  const handleSearch = (query, page) => {
    if (query === searchQuery) return;
    if (query === '') {
      setSearchPlaceholder('Enter a movie title');
      return;
    }
    dispatch(searchMoviesAsync(query, page));
    setSearchPlaceholder('Search Movies');
  };

  const title = () => {
    if (searchResults.length > 0) {
      return `Search Results for "${searchQuery}"`;
    } else {
      switch (filter) {
        case 'popular':
          return 'Popular Movies';
        case 'top_rated':
          return 'Top Rated Movies';
        case 'upcoming':
          return 'Upcoming Movies';
        case 'now_playing':
          return 'Now Playing Movies';
        default:
          return 'All Movies';
      }
    }
  };

  return (
    <div className='movie-list-container'>
      <div className='movie-list-search'>
        <SortFilter option={selectedOption} onOption={setSelectedOption} />
        <SearchBar onSearch={handleSearch} placeholder={searchPlaceholder} />
      </div>
      {loading && <Loader />}
      {!loading && !error && (
        <>
          <h2 className='movie-list-title'>{title()}</h2>
          <ul className='movie-list'>
            {searchResults.length > 0
              ? searchResults.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))
              : movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
          </ul>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
      )}
      {error && <div className='error-message'>{error}</div>}
    </div>
  );
};

export default MovieList;
