import React from 'react';
import { Field, reduxForm } from 'redux-form';
import poiFirstPageFields from './PoiFirstPageFields';

const CreatePoiFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="category"
        component={poiFirstPageFields}
        required
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
})(CreatePoiFirstPage);
