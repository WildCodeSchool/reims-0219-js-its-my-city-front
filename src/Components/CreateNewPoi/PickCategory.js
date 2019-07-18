import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PickCategoryFields from './PickCategoryFields';
import InputFieldChecked from './validate';
import '../ComponentsCSS/createPoiForm.scss';
import PreviousPageButton from './PreviousPageButton';
import NextPageButton from './NextPageButton';

const mapStateToProps = state => ({
  categoryKeyword: state.form.poiCreation.values && state.form.poiCreation.values.categoryKeyword,
});

let PickCategory = ({ categoryKeyword }) => (
  <form className="formContainer">
    <PreviousPageButton />
    <p className="step">Etape 3/5</p>
    <Field
      name="categoryKeyword"
      component={PickCategoryFields}
      label="Sélectionnez une catégorie pour pouvoir retrouver votre point d'intéret..."
    />
    <div>
      <NextPageButton />
    </div>
  </form>
);

PickCategory = connect(mapStateToProps)(PickCategory);

export default reduxForm({
  form: 'poiCreation', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: false, // <------ unregister fields on unmount
  InputFieldChecked,
})(PickCategory);
