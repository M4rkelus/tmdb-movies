import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/movies/movies.actions';
import { setPage } from '../../store/pagination/pagination.actions';

import './SortFilter.styles.css';
import { useEffect } from 'react';
import { selectFilter } from '../../store/movies/movies.selectors';
import { saveSearchResults } from '../../store/search/search.actions';

const SortFilter = ({ option, onOption }) => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    onOption(filter);
    dispatch(setFilter(filter));
    dispatch(saveSearchResults([]));
  }, [filter]);

  const handleChange = (event) => {
    onOption(event.target.value);
    dispatch(setPage(1));
    dispatch(setFilter(event.target.value));
    dispatch(saveSearchResults([]));
  };

  return (
    <div className='sort-filter-container'>
      <label htmlFor='sort-filter' className='sort-filter-label'>
        Sort by:
      </label>
      <select
        id='sort-filter'
        className='sort-filter-select'
        onChange={handleChange}
        value={option}
      >
        <option value='top_rated'>Top Rated</option>
        <option value='popular'>Popular</option>
        <option value='now_playing'>Now Playing</option>
        <option value='upcoming'>Upcoming</option>
      </select>
    </div>
  );
};

export default SortFilter;
