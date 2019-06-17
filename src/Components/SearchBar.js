import React from 'react';
import { connect } from 'react-redux';
import './ComponentsCSS/searchBar.css';
import { ReactComponent as Logo } from './pictos/search.svg';

const mapStateToProps = state => ({
  searchBarValueInput: state.searchBarValueInput,
});

const handleChange = (e) => {
  const { dispatch } = this.props;
  dispatch({ type: 'HANDLE_SEARCHBAR_INPUT', searchBarValueInput: e.target.value });
};

const SearchBar = () => (
  <div>
    <div className="search-box">
      <input
        className="search-text"
        type="text"
        placeholder="Rechercher"
        onChange={handleChange}
      />
      <Logo className="search-logo" />
    </div>
  </div>
);

export default connect(mapStateToProps)(SearchBar);
