import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputFieldChecked from './validate';
import PoiThirdPageFields from './PoiThirdPageFields';


const CreatePoiThirdPage = ({
  handleSubmit,
  previousPage,
  pristine,
  submitting,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        name="ratingPoi"
        component={PoiThirdPageFields}
      />
    </div>


    <div>
      <button type="button" className="previous" onClick={previousPage}>
          Previous
      </button>
      <button type="submit" disabled={pristine || submitting}>Submit</button>
    </div>
  </form>
);

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  InputFieldChecked,
})(CreatePoiThirdPage);
