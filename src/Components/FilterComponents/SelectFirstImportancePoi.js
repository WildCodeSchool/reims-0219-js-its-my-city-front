import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/FilterComponent.scss';

const mapStateToProps = state => ({
});


const onlyKeywordsFirstImportance = keywords => keywords.filter(
  keyword => keyword.importance === 1,
);


const SelectFirstImportancePoi = ({dispatch, poiKeywordsDisplay, firstIndicationIsDisplayed }) => (

<div>
  <h1 className="themes">Thèmes</h1>;
  { firstIndicationIsDisplayed && <p className="selectTheme">Veuillez selectionner un thème</p>; }

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
      <button className="Previous" type="button">Précédent</button>
      <button className="Next" type="button">Suivant</button>
    </div>
</div>
)


export default connect(mapStateToProps)(SelectFirstImportancePoi);
