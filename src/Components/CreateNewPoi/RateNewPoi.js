import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import RateNewPoiFields from './RateNewPoiFields';
import PreviousPageButton from './PreviousPageButton';

const mapStateToProps = state => ({
  geolocCoordonnees: state.pois.geolocCoordonnees,
  createPoiFormInfos: state.form,
  conditionRating: state.pois.conditionRating,
  accessibilityRating: state.pois.accessibilityRating,
  operationRating: state.pois.operationRating,
  customCoordonnes: state.pois.customCoordonnes,
});

let RateNewPoi = ({
  createPoiFormInfos,
  customCoordonnes,
  accessibilityRating,
  conditionRating,
  operationRating,
  dispatch,
}) => (
  <form className="formContainer">
    <p className="step">Etape 5/5</p>

    <div>
      <Field
        name="ratingPoi"
        component={RateNewPoiFields}
      />
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            axios.post(`${process.env.REACT_APP_API_URL}/pois`, {
              name: createPoiFormInfos.poiCreation.values.poiDesc,
              latitude: customCoordonnes[0],
              longitude: customCoordonnes[1],
              keyword: createPoiFormInfos.poiCreation.values.categoryKeyword,
              author_id: 1,
              global_grade: 4,
              accessibility: accessibilityRating,
              condition: conditionRating,
              functional: operationRating,
            })
              .then(res => dispatch({ type: 'SAVE_NEW_POI_COORDINATES', filteredPoiByKeyword: res.data, newPoiCoordinates: res.data[0].localisation }));
          }}
          type="submit"
        >
            Soumettre la création de votre point d'intérets.
        </button>
        <PreviousPageButton />
      </div>
    </div>


  </form>
);

RateNewPoi = connect(
  mapStateToProps,
)(RateNewPoi);

export default reduxForm({
  form: 'poiCreation', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(RateNewPoi);
