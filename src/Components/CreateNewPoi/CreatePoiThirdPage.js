import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import PoiThirdPageFields from './PoiThirdPageFields';


const CreatePoiThirdPage = (props) => {
  const {
    handleSubmit, pristine, previousPage, submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
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
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(CreatePoiThirdPage);
