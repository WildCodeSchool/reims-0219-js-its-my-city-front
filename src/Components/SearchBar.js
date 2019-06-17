import React from 'react';
import { connect } from 'react-redux';
import './ComponentsCSS/searchBar.css';
import { ReactComponent as Logo } from './pictos/search.svg';

const mapStateToProps = state => ({
  searchBarValueInput: state.searchBarValueInput,
});

const SearchBar = ({ dispatch, searchBarValueInput }) => (
  <div>
    <div className="search-box">
      <input className="search-text" type="text" placeholder="Rechercher" onChange={() => dispatch } />
      <Logo className="search-logo" />
    </div>
  </div>
);

export default connect(mapStateToProps)(SearchBar);
