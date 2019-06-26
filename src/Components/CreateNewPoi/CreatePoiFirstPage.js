import React from 'react';
import { Field, reduxForm } from 'redux-form';
import poiFirstPageFields from './PoiFirstPageFields';
import validate from './validate';

const CreatePoiFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
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
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(CreatePoiFirstPage);
