import React from 'react';
import { connect } from 'react-redux';
import './ComponentsCSS/searchBar.css';
import { ReactComponent as Logo } from './pictos/search.svg';

const mapStateToProps = state => ({
  searchBarValueInput: state.searchBarValueInput,
});

const SearchBar = ({ dispatch }) => (
  <div>
    <div className="search-box">
      <input
        className="search-text"
        type="text"
        placeholder="Rechercher"
        onChange={e => dispatch({ type: 'HANDLE_SEARCHBAR_INPUT', searchBarValueInput: e.target.value })}
      />
      <Logo className="search-logo" />
    </div>
  </div>
);

export default connect(mapStateToProps)(SearchBar);
