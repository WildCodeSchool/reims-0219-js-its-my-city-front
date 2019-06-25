import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import poiSecondPagesFields from './PoiSecondPageFields';

const CreatePoiSecondPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={poiSecondPagesFields}
      />
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(CreatePoiSecondPage);
