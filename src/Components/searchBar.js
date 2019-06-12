/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import './searchBar.css';
import { ReactComponent as Logo } from './pictos/search.svg';


const SearchBar = () => (
  <div>
    <form className="search-box">
      <div>
        <input className="search-text" type="text" placeholder="Rechercher" />
        <Logo className="search-logo" />
      </div>
    </form>
  </div>
);

export default SearchBar;
