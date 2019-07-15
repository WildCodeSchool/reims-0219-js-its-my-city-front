import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/FilterComponent.scss';

const mapStateToProps = state => ({
  poiKeywordsDisplay: state.pois.poiKeywordsDisplay,
  displaySecondImportancePoiPage: state.pois.displaySecondImportancePoiPage,
  firstIndicationIsDisplayed: state.pois.firstIndicationIsDisplayed,
  filterKeywordPageDisplay: state.pois.filterKeywordPageDisplay,
});

const selectRightKeywordChildren = (
  specificKeyword, poiKeywordsDisplay,
) => poiKeywordsDisplay.filter(
  keyword => keyword.parent_id === specificKeyword.id,
);

const onlyKeywordsFirstImportance = keywords => keywords.filter(
  keyword => keyword.importance === 1,
);


const SelectFirstImportancePoi = ({
  dispatch, poiKeywordsDisplay, firstIndicationIsDisplayed,
}) => (

  <div className="filterComponent">
    { firstIndicationIsDisplayed && <p className="selectTheme">Veuillez selectionner un thème</p> }

    <div className="keywordsOfFirstImportance">
      {onlyKeywordsFirstImportance(poiKeywordsDisplay).map(keyword => (
        <button
          type="button"
          className={`buttonStyle buttonStyle${keyword.id}`}
          key={keyword.name}
          onClick={() => dispatch({
            type: 'SHOW_SECOND_IMPORTANCE_KEYWORDS',
            specificSecondKeywords: selectRightKeywordChildren(keyword, poiKeywordsDisplay),
          })}
        >
          {keyword.name}

        </button>
      ))}
    </div>
  </div>
);


export default connect(mapStateToProps)(SelectFirstImportancePoi);
