import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/FilterComponent.scss';
import PreviousPageFilterButton from './PreviousPageFilterButton';

const mapStateToProps = state => ({
  isKeywordOneChoosen: state.pois.poiKeywordsDisplay,
  specificSecondKeywords: state.keywords.specificSecondKeywords,
  isKeywordTwoChoosen: state.display.isKeywordTwoChoosen,
  filteredPoiByKeyword: state.keywords.filteredPoiByKeyword,
  secondKeyword: state.keywords.secondKeyword,
  keywordOneChoosen: state.keywords.keywordOneChoosen,

});

const SelectSecondImportancePoi = ({
  dispatch, isKeywordOneChoosen, specificSecondKeywords, keywordOneChoosen,
}) => (
  <div className="secondFilterPage">
    <PreviousPageFilterButton />

    <div className="selectedKeywordOne">
      {keywordOneChoosen}
    </div>

    <div className="selectSecondTheme">
      <p>Affinez votre recherche</p>
    </div>

    <div className="keywordsOfSecondImportance">
      {isKeywordOneChoosen && specificSecondKeywords.map(keyword => (
        <button
          type="button"
          className="secondFilterButton"
          key={keyword.name}
          onClick={() => dispatch({ type: 'APPLY_BUTTON', secondKeyword: keyword.name })
      }
        >
          {keyword.name}

        </button>
      ))}
    </div>
  </div>
);


export default connect(mapStateToProps)(SelectSecondImportancePoi);
