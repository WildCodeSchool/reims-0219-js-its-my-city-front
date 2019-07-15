import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/FilterComponent.scss';
import axios from 'axios';


const mapStateToProps = state => ({
  isKeywordOneChoosen: state.pois.poiKeywordsDisplay,
  specificSecondKeywords: state.pois.specificSecondKeywords,
  isKeywordTwoChoosen: state.pois.isKeywordTwoChoosen,
  filteredPoiByKeyword: state.pois.filteredPoiByKeyword,
  secondIndicationIsDisplayed: state.pois.secondIndicationIsDisplayed,
  secondKeyword: state.pois.secondKeyword,

});

const SelectSecondImportancePoi = ({
  dispatch, isKeywordOneChoosen, secondIndicationIsDisplayed, specificSecondKeywords,
  isKeywordTwoChoosen, secondKeyword,
}) => (
  <div className="secondFilterPage">

    <button
      type="button"
      className="closeButton"
      onClick={() => dispatch({ type: 'CLOSE_SECOND_IMPORTANCE_KEYWORDS' })}
    >
        X
    </button>

    <button
      className="previousButton"
      type="button"
      onClick={() => dispatch({ type: 'GO_BACK_TO_FIRST_IMPORTANCE_KEYWORDS' })}
    >
      Précédent
    </button>

    <div className="selectSecondTheme">
      {secondIndicationIsDisplayed && <p>Affinez votre recherche</p>}
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

    <div>
      <div className="applyButton">
        {isKeywordTwoChoosen && (
        <button
          type="button"
          className="applyButtonStyle"
          onClick={() => axios.get(`${process.env.REACT_APP_API_URL}/pois/filter/${secondKeyword}`)
            .then(res => dispatch({
              type: 'HANDLE_KEYWORD_FILTERING',
              filteredPoiByKeyword: res.data,
              userInputSearchBar: secondKeyword,
            })).then(setTimeout(() => {
              dispatch({ type: 'HIDE_ALERT' });
            }, 3000))
      }
        >
        Appliquer
        </button>
        )
        }
      </div>
    </div>
  </div>
);


export default connect(mapStateToProps)(SelectSecondImportancePoi);
