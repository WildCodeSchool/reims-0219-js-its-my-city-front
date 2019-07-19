import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import RateNewPoiFields from './RateNewPoiFields';
import PreviousPageButton from './PreviousPageButton';

let RateNewPoi = () => (
  <form className="formContainer">
    <PreviousPageButton />
    <p className="step">Etape 5/5</p>
    <div className="textPageGrade">
      Veuillez noter le point d'interet et soumettre votre création.
    </div>
    <Field
      name="ratingPoi"
      component={RateNewPoiFields}
    />
    <div>
      <button
        className="submitButton"
        
        type="submit"
      >
        Créer votre point d'intérets.
      </button>
    </div>
  </form>
);

RateNewPoi = connect()(RateNewPoi);

export default reduxForm({
  form: 'poiCreation', //                 <------ same form name
  destroyOnUnmount: true, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(RateNewPoi);
