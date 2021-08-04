import React from 'react';
// import './search-box.styles.css';

export function SearchBox ({placeholder, handleChange}) {
    <input 
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
};