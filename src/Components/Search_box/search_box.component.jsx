import React from 'react';

import './search-box.styles.css';

export const Searchbox = ({placeholder, handleChanger}) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChanger}
      />
)

