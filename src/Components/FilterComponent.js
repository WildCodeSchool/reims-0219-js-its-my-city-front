import React from 'react';
import './ComponentsCSS/FilterComponent.scss';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => ({
  specificPoiInfos: state.pois.specificPoiInfos,
  poiKeywordsDisplay: state.pois.poiKeywordsDisplay,
  filterKeywordPageDisplay: state.pois.filterKeywordPageDisplay,
});

const onlyKeywordsFirstImportance = keywords => keywords.filter(keyword => keyword.importance === 1);

const FilterComponent = ({ dispatch, poiKeywordsDisplay }) => (
  <div className="filterComponent">
    <button onClick={() => dispatch({ type: 'CLOSE_FILTER_COMPONENT' })} type="button">X</button>
    <h1>Catégories</h1>
    <button type="button">Points d'intérêts</button>
    <button type="button">évenements</button>
    <h1>Thèmes</h1>
    {onlyKeywordsFirstImportance(poiKeywordsDisplay).map(keyword => (
      <button
        type="button"
        key={keyword.name}
        onClick={() => axios.get(`http://localhost:3001/pois/filter/${keyword.name}`)
          .then(res => dispatch({ type: 'HANDLE_KEYWORD_FILTERING', filteredPoiByKeyword: res.data }),
            dispatch({ type: 'CLOSE_FILTER_COMPONENT' }))
      }
      >
        {keyword.name}

      </button>
    ))}
  </div>
);


export default connect(mapStateToProps)(FilterComponent);
