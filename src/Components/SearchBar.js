import React from 'react';
import { connect } from 'react-redux';
import './ComponentsCSS/searchBar.scss';
import axios from 'axios';
import { ReactComponent as Logo } from './pictos/search.svg';
import Autocomplete from '../../node_modules/react-autocomplete';

const mapStateToProps = state => ({
  searchBarValueInput: state.searchBarValueInput,
  filteredPoiByKeyword: state.filteredPoiByKeyword,
  poiKeywordsDisplay: state.poiKeywordsDisplay,
  value: state.value,
});

const SearchBar = ({
  dispatch, searchBarValueInput, poiKeywordsDisplay, value,
}) => (
  <div>
    <div className="search-box">
      <Autocomplete
        items={poiKeywordsDisplay}
        shouldItemRender={(item, value2) => item.label.toLowerCase().indexOf(value2.toLowerCase()) > -1}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) => (
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
          >
            {item.label}
          </div>
        )}
        value={value}
        onChange={e => dispatch({ type: 'HANDLE_SEARCHBAR', value: e.target.value })}
        onSelect={value3 => dispatch({ type: 'HANDLE_SELECT', value3 })}
      />
      <Logo className="search-logo" />
    </div>
  </div>
);

export default connect(mapStateToProps)(SearchBar);
