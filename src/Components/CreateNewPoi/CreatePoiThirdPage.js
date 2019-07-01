import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import PoiThirdPageFields from './PoiThirdPageFields';


const CreatePoiThirdPage = (props) => {
  const {
    handleSubmit, previousPage,
  } = props;
  return (
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
})(CreatePoiThirdPage);
