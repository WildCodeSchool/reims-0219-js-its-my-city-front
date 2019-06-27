import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';


const mapStateToProps = state => ({
  name: state.pois.name,
  keywordOne: state.pois.keywordOne,
  keywordOneId: state.pois.keywordOneId,
  keywordTwo: state.pois.keywordTwo,
  geolocCoordonnees: state.pois.geolocCoordonnees,
  poiKeywordsDisplay: state.pois.poiKeywordsDisplay,
});

const poiFirstPageFields = ({
  dispatch, poiKeywordsDisplay,
}) => (
  <div className="poi-create">
    <label htmlFor="keywordTwo">Catégorie:</label>

    <select
      id="keywordTwo"
      name="keywordTwo"
      onChange={
          e => dispatch({
            type: 'HANDLE_FORM_K2_CHANGE',
            keywordTwo: e.target.value,
          })}
      required
    >
      <option>
            Choissisez une catégorie
      </option>
      {poiKeywordsDisplay.filter(keyword => keyword.importance === 2)
        .map(keyword => (
          <option key={keyword.name} id={keyword.name} value={keyword.name}>
            {(keyword.name)}
          </option>
        ))}
    </select>
  </div>
);

export default connect(mapStateToProps)(poiFirstPageFields);
