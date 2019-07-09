import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PickCategoryFields from './PickCategoryFields';
import validate from './validate';
import '../ComponentsCSS/createPoiForm.scss';
import PreviousPageButton from './PreviousPageButton';
import NextPageButton from './NextPageButton';

const mapStateToProps = state => ({
  labelKey: state.pois.poiKeywordsDisplay.find(keyword => keyword.id === 7),
});

let PickCategory = ({ labelKey }) => {
  console.log(labelKey);
  return (
    <form className="formContainer">
      <Field
        name="categoryKeyword"
        component={PickCategoryFields}
        label="Sélectionnez une catégorie..."
      />
      <div>
        <PreviousPageButton />
        <NextPageButton labelKey={`${labelKey.name} - `} />
      </div>
    </form>
  );
};

PickCategory = connect(mapStateToProps)(PickCategory);

export default reduxForm({
  form: 'poiCreation', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(PickCategory);
