import React, { useState } from 'react';

import './SearchBar.styles.css';

const SearchBar = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        className='search-input'
        type='text'
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
