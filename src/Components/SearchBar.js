import React from 'react';
import { connect } from 'react-redux';
import './ComponentsCSS/searchBar.scss';
import SearchBarSvg from './ComponentPins/SearchBarSvg';
import Autocomplete from '../../node_modules/react-autocomplete';
import getPoisAccordingToKeyword from '../Functions/getPoisAccordingToKeyword';
import SearchBarCloseSvg from './ComponentPins/SearchBarCloseSvg';

const mapStateToProps = state => ({
  filteredPoiByKeyword: state.pois.filteredPoiByKeyword,
  poiKeywordsDisplay: state.pois.poiKeywordsDisplay,
  userInputSearchBar: state.pois.userInputSearchBar,
});

const dropdownMenuStyle = {
  borderRadius: '3px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '2px 0',
  fontSize: '1.2rem',
  position: 'fixed',
  overflow: 'auto',
  maxHeight: '40%',
  maxWidth: '50%',
  marginLeft: '-1rem',
};


const SearchBar = ({
  dispatch, poiKeywordsDisplay, userInputSearchBar,
}) => (
  <div className="search-box">
    {userInputSearchBar.length === 0 ? <SearchBarSvg /> : <SearchBarCloseSvg />}
    <div>
      <Autocomplete
        items={poiKeywordsDisplay}
        sortItems={(a, b) => a.name.localeCompare(b.name)}
        shouldItemRender={
          (item, value2) => item.name.toLowerCase().indexOf(value2.toLowerCase()) > -1
        }
        getItemValue={item => item.name}
        menuStyle={dropdownMenuStyle}
        renderItem={(item, highlighted) => (
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent', height: '60px', textAlign: 'center' }}
          >
            {item.name}
          </div>
        )}
        value={userInputSearchBar}
        onChange={e => dispatch({ type: 'HANDLE_SEARCHBAR_INPUT', userInputSearchBar: e.target.value })}
        onSelect={value3 => getPoisAccordingToKeyword(value3, dispatch, poiKeywordsDisplay)}
      />
    </div>
  </div>
);

export default connect(mapStateToProps)(SearchBar);
