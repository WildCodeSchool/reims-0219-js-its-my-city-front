import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/FilterComponent.scss';
import axios from 'axios';


const mapStateToProps = state => ({
});

const SelectSecondImportancePoi = ({
  dispatch, isKeywordOneChoosen, secondIndicationIsDisplayed, specificSecondKeywords,
  isKeywordTwoChoosen, secondKeyword,
}) => (
  <div>
    <div>
      {secondIndicationIsDisplayed && <p className="selectSecondTheme">Affinez votre recherche</p>}
    </div>

    <div className="keywordsOfSecondImportance">
      {isKeywordOneChoosen && specificSecondKeywords.map(keyword => (
        <button
          type="button"
          className="buttonStyle"
          key={keyword.name}
          onClick={() => dispatch({ type: 'APPLY_BUTTON', secondKeyword: keyword.name })
      }
        >
          {keyword.name}

        </button>
      ))}
    </div>

    <div className="applyButton">
      {isKeywordTwoChoosen && (
      <button
        type="button"
        className="applyButtonStyle"
        onClick={() => axios.get(`${process.env.REACT_APP_API_URL}/pois/filter/${secondKeyword}`)
          .then(res => dispatch({ type: 'HANDLE_KEYWORD_FILTERING', filteredPoiByKeyword: res.data, poiSampleDisplay: [] }))
        }
      >
      Appliquer
      </button>
      )
          }
    </div>
  </div>
);


export default connect(mapStateToProps)(SelectSecondImportancePoi);
