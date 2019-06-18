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

// Filter all keywords where the index is different from -1,
// and lower case them all to be case insensitive
const filterKeywords = (keyword, userInput) => keyword.filter(el => el.name
  .toLowerCase().indexOf(userInput.toLowerCase()) !== -1);

const SearchBar = ({ dispatch, searchBarValueInput }) => (
  <div>
    <div className="search-box">
      <input
        className="search-text"
        type="text"
        placeholder="Rechercher"
        onChange={e => dispatch({ type: 'HANDLE_SEARCHBAR_INPUT', searchBarValueInput: e.target.value })}
        list="keywords"
      />
      {searchBarValueInput
      && (
      <datalist id="keywords">
        {filterKeywords(keywords, searchBarValueInput).map(word => <option value={word.name} />)}
      </datalist>
      )}
      <Logo className="search-logo" />
    </div>
  </div>
);

export default connect(mapStateToProps)(SearchBar);
