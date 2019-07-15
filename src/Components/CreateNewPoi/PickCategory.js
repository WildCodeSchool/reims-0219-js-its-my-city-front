import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PickCategoryFields from './PickCategoryFields';
import validate from './validate';
import '../ComponentsCSS/createPoiForm.scss';
import PreviousPageButton from './PreviousPageButton';
import NextPageButton from './NextPageButton';

let PickCategory = () => (
  <form className="formContainer">
    <p className="step">Etape 3/5</p>
    <Field
      name="categoryKeyword"
      component={PickCategoryFields}
      label="Sélectionnez une catégorie..."
    />
    <div>
      <PreviousPageButton />
      <NextPageButton />
    </div>
  </form>
);

PickCategory = connect()(PickCategory);

export default reduxForm({
  form: 'poiCreation', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(PickCategory);
