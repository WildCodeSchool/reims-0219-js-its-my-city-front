import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import poiFourthPagesFields from './PoiFourthPageFields';

const CreatePoiFourthPage = (props) => {
  const {
    handleSubmit, pristine, submitting, previousPage,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="uploadPicture"
        component={poiFourthPagesFields}
      />
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
})(CreatePoiFourthPage);
