import React from 'react';
import { Field, reduxForm } from 'redux-form';
import poiSecondPagesFields from './PoiSecondPageFields';


const CreatePoiSecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="poiDesc"
        component={poiSecondPagesFields}
        label="Indiquez un nom ou une courte description..."
      />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(CreatePoiSecondPage);
