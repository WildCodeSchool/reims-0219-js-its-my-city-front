import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import PoiThirdPageFields from './PoiThirdPageFields';

const mapStateToProps = state => ({
  geolocCoordonnees: state.pois.geolocCoordonnees,
  createPoiFormInfos: state.form,
  conditionRating: state.pois.conditionRating,
  accessibilityRating: state.pois.accessibilityRating,
  operationRating: state.pois.operationRating,
  page: state.pois.formPage,
  customCoordonnes: state.pois.customCoordonnes,
});

let RateNewPoi = ({
  page,
  dispatch,
  createPoiFormInfos,
  customCoordonnes,
  accessibilityRating,
  conditionRating,
  operationRating,
}) => (
  <form>
    <div>
      <Field
        name="ratingPoi"
        component={PoiThirdPageFields}
      />
    </div>

    <div>
      <button
        onClick={() => axios.post(`${process.env.REACT_APP_API_URL}/pois`, {
          name: createPoiFormInfos.wizard.values.poiDesc,
          latitude: customCoordonnes[0],
          longitude: customCoordonnes[1],
          keyword: createPoiFormInfos.wizard.values.categoryKeyword,
          author_id: 'Wilder',
          global_grade: 4,
          accessibility: accessibilityRating,
          condition: conditionRating,
          functional: operationRating,

        })}
        type="button"
      >
Soumettre la création de votre point d'intérets.
      </button>
      <button onClick={() => dispatch({ type: 'PREVIOUS_PAGE', page: page - 1 })} type="submit" className="previous">
        Précédent
      </button>
    </div>
  </form>
);

RateNewPoi = connect(
  mapStateToProps,
)(RateNewPoi);

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(RateNewPoi);
