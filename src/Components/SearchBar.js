import React from 'react';
import { connect } from 'react-redux';
import './ComponentsCSS/searchBar.css';
import { ReactComponent as Logo } from './pictos/search.svg';

const mapStateToProps = state => ({
  searchBarValueInput: state.searchBarValueInput,
});

const keywords = [
  { name: 'Nature' },
  { name: 'Sport' },
];

const filterKeywords = (keyword, userInput) => keyword.filter(el => el.name.toLowerCase().indexOf(userInput.toLowerCase()) !== -1);

const SearchBar = ({ dispatch, searchBarValueInput }) => (
  <div>
    <div className="search-box">
      <input
        className="search-text"
        type="text"
        placeholder="Rechercher"
        onChange={e => dispatch({ type: 'HANDLE_SEARCHBAR_INPUT', searchBarValueInput: e.target.value })}
      />
      {searchBarValueInput
      && (
      <ul>
        {filterKeywords(keywords, searchBarValueInput).map(word => <li>{word.name}</li>)}
      </ul>
      )}
      <Logo className="search-logo" />
    </div>
  </div>
);

export default connect(mapStateToProps)(SearchBar);
