import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/FilterComponent.scss';


const mapStateToProps = state => ({
  filterKeywordPageDisplay: state.pois.filterKeywordPageDisplay,
  barsAreDisplayed: state.pois.barsAreDisplayed,
  displayFirstImportancePoiPage: state.pois.displayFirstImportancePoiPage,
});


const SelectCategorie = ({ dispatch }) => (

  <div className="filterComponent">

    {<button
      type="button"
      className="closeButton"
      onClick={() => dispatch({ type: 'DISPLAY_FILTER_PAGE' })}
    >
    X
     </button>}

    <h1 className="categories">Catégories</h1>

    <div className="buttonContainer">

      {<button
        className="filterButton1 buttonStyle"
        type="button"
      >
      Points d'intérêts
      </button>}

      <button className="filterButton2 buttonStyle" type="button">Événements</button>

    </div>
    <div className="selectionButtons">
      <button
        className="nextButton"
        type="button"
        onClick={() => dispatch({ type: 'SHOW_FIRST_IMPORTANCE_KEYWORDS' })}
      >
        Suivant
      </button>
    </div>

  </div>
);


export default connect(mapStateToProps)(SelectCategorie);
