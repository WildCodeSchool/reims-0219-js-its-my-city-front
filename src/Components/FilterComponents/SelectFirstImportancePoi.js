import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/FilterComponent.scss';

const mapStateToProps = state => ({
  poiKeywordsDisplay: state.pois.poiKeywordsDisplay,
  filterKeywordPageDisplay: state.display.filterKeywordPageDisplay,
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
  dispatch, poiKeywordsDisplay,
}) => (
  <div className="filterComponent">
    <h1 className="categories">Catégories</h1>
    <div className="buttonContainer">
      <button
        className="filterButtonPoi"
        type="button"
      >
    Points d'intérêts
      </button>
      <button className="filterButtonPoi filterButtonEvent" type="button">Événements</button>
    </div>
    <div><p className="eventTeasing">Bientôt Disponible</p></div>


    <p className="selectTheme">Veuillez selectionner un thème</p>

    <div className="keywordsOfFirstImportance">
      {onlyKeywordsFirstImportance(poiKeywordsDisplay).map(keyword => (
        <button
          type="button"
          className={`buttonStyle buttonStyle${keyword.id}`}
          key={keyword.name}
          onClick={() => dispatch({
            type: 'SHOW_SECOND_IMPORTANCE_KEYWORDS',
            specificSecondKeywords: selectRightKeywordChildren(keyword, poiKeywordsDisplay),
            keywordOneChoosen: keyword.name,
          })}
        >
          {keyword.name}

        </button>
      ))}
    </div>
  </div>
);


export default connect(mapStateToProps)(SelectFirstImportancePoi);
