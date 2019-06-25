import React from 'react';
import './ComponentsCSS/FilterComponent.scss';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => ({
  specificPoiInfos: state.specificPoiInfos,
  poiKeywordsDisplay: state.poiKeywordsDisplay,
  filterKeywordPageDisplay: state.filterKeywordPageDisplay,
  isKeywordOneChoose: state.isKeywordOneChoose,
  specificSecondKeyword: state.specificSecondKeyword,
});

const onlyKeywordsFirstImportance = keywords => keywords.filter(
  keyword => keyword.importance === 1,
);

const selectRightKeywordChildren = (specificKeyword, poiKeywordsDisplay) => poiKeywordsDisplay.filter(keyword => keyword.parent_id === specificKeyword.id);


const FilterComponent = ({
  dispatch, poiKeywordsDisplay, isKeywordOneChoose, specificSecondKeyword,
}) => (
  <div className="filterComponent">
    <button onClick={() => dispatch({ type: 'CLOSE_FILTER_COMPONENT' })} type="button">X</button>
    <h1 className="categories">Catégories</h1>
    <div className="buttonContainer">
      <button className="filterButton1 buttonStyle" type="button">Points d'intérêts</button>
      <button className="filterButton2 buttonStyle" type="button">Événements</button>
    </div>
    <h1 className="themes">Thèmes</h1>
    <div className="themeContainer">
      {onlyKeywordsFirstImportance(poiKeywordsDisplay).map(keyword => (
        <button
          type="button"
          className="buttonStyle"
          key={keyword.name}
          onClick={() => dispatch({
            type: 'SHOW_SECOND_IMPORTANCE_KEYWORD',
            specificSecondKeyword: selectRightKeywordChildren(keyword, poiKeywordsDisplay),
          })}
        >
          {keyword.name}

        </button>
      ))}


      {isKeywordOneChoose === true && specificSecondKeyword.map(keyword => (
        <button
          type="button"
          className="buttonStyle"
          key={keyword.name}
          onClick={() => axios.get(`${process.env.REACT_APP_API_URL}/pois/filter/${keyword.name}`)
            .then(res => dispatch({ type: 'HANDLE_KEYWORD_FILTERING', filteredPoiByKeyword: res.data }),
              dispatch({ type: 'CLOSE_FILTER_COMPONENT' }))
      }
        >
          {keyword.name}

        </button>
      ))}
    </div>
  </div>
);


export default connect(mapStateToProps)(FilterComponent);
