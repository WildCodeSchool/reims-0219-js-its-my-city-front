import React from 'react';
import { Field, reduxForm } from 'redux-form';
import poiFirstPageFields from './PoiFirstPageFields';
import InputFieldChecked from './validate';
import '../ComponentsCSS/createPoiForm.scss';

const CreatePoiFirstPage = ({
  handleSubmit, isCreateFormDisplayed,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      {<button type="button" className="closeButton">X</button>}
    </div>
    <Field
      name="categoryKeyword"
      component={poiFirstPageFields}
      label="Sélectionnez une catégorie..."
    />
    <div>
      <button type="submit" className="next">Next</button>
    </div>
  </form>
);

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  InputFieldChecked,
})(CreatePoiFirstPage);
