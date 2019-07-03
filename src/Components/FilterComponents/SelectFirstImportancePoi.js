import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/FilterComponent.scss';

const mapStateToProps = state => ({
  poiKeywordsDisplay: state.pois.poiKeywordsDisplay,
});

const selectRightKeywordChildren = (specificKeyword, poiKeywordsDisplay) => poiKeywordsDisplay.filter(keyword => keyword.parent_id === specificKeyword.id);

const onlyKeywordsFirstImportance = keywords => keywords.filter(
  keyword => keyword.importance === 1,
);


const SelectFirstImportancePoi = ({ dispatch, poiKeywordsDisplay, firstIndicationIsDisplayed }) => (

  <div className="filterComponent">
    <h1 className="themes">Thèmes</h1>
;
    { firstIndicationIsDisplayed && <p className="selectTheme">Veuillez selectionner un thème</p> }

    <div className="keywordsOfFirstImportance">
      {onlyKeywordsFirstImportance(poiKeywordsDisplay).map(keyword => (
        <button
          type="button"
          className="buttonStyle"
          key={keyword.name}
          onClick={() => dispatch({
            type: 'SHOW_SECOND_IMPORTANCE_KEYWORD',
            specificSecondKeywords: selectRightKeywordChildren(keyword, poiKeywordsDisplay),
          })}
        >
          {keyword.name}

        </button>
      ))}
    </div>
    <div>
      <button
        className="previousButton"
        type="button"
        onClick={() => dispatch({ type: 'SHOW_FIRST_IMPORTANCE_KEYWORDS' })}
      >
      Précédent
      </button>
      <button className="nextButton" type="button">Suivant</button>
    </div>
  </div>
);


export default connect(mapStateToProps)(SelectFirstImportancePoi);
