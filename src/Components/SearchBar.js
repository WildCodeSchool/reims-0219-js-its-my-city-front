import React from 'react';
import './ComponentsCSS/searchBar.css';
import { ReactComponent as Logo } from './pictos/search.svg';


const SearchBar = () => (
  <div>
    <div className="search-box">
      <input className="search-text" type="text" placeholder="Rechercher" />
      <Logo className="search-logo" />
    </div>
  </div>
);

export default SearchBar;
