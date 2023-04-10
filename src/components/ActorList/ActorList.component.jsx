import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchActorsAsync } from '../../store/actors/actors.actions';
import {
  saveSearchResults,
  searchActorsAsync,
  setSearchQuery,
} from '../../store/search/search.actions';

import {
  selectActors,
  selectLoading,
  selectError,
} from '../../store/actors/actors.selectors';

import {
  selectPage,
  selectTotalPages,
} from '../../store/pagination/pagination.selectors';

import {
  selectSearchQuery,
  selectSearchResults,
} from '../../store/search/search.selector';

import ActorCard from '../ActorCard/ActorCard.component';
import Pagination from '../Pagination/Pagination.component';
import SearchBar from '../SearchBar/SearchBar.component';
import Loader from '../Loader/Loader.component';

import './ActorList.styles.css';

const ActorList = () => {
  const actors = useSelector(selectActors);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const searchResults = useSelector(selectSearchResults);
  const searchQuery = useSelector(selectSearchQuery);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectPage);

  const dispatch = useDispatch();

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search Actors');

  useEffect(() => {
    if (isFirstRender) {
      dispatch(fetchActorsAsync(1));
      dispatch(setSearchQuery(''));
      dispatch(saveSearchResults([]));
      setIsFirstRender(false);
    } else if (searchResults.length > 0) {
      dispatch(searchActorsAsync(searchQuery, currentPage));
    } else {
      dispatch(fetchActorsAsync(currentPage));
    }
  }, [dispatch, currentPage]);

  const handleSearch = (query, page) => {
    if (query === searchQuery) return;
    if (query === '') {
      setSearchPlaceholder('Enter a actor name');
      return;
    }
    dispatch(searchActorsAsync(query, page));
    setSearchPlaceholder('Search Actors');
  };

  return (
    <div className='actor-list-container'>
      <div className='actor-list-search'>
        <SearchBar onSearch={handleSearch} placeholder={searchPlaceholder} />
      </div>
      {loading && <Loader />}
      {!loading && !error && (
        <>
          <h2 className='actor-list-title'>Popular Actors</h2>
          <ul className='actor-list'>
            {searchResults.length > 0
              ? searchResults.map((actor) => (
                  <ActorCard key={actor.id} actor={actor} />
                ))
              : actors.map((actor) => (
                  <ActorCard key={actor.id} actor={actor} />
                ))}
          </ul>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
      )}
      {error && <div className='error-message'>{error}</div>}
    </div>
  );
};

export default ActorList;
