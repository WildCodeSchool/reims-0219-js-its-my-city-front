import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import poiFirstPageFields from './PoiFirstPageFields';
import validate from './validate';
import '../ComponentsCSS/createPoiForm.scss';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});

let CreatePoiFirstPage = ({ page, dispatch }) => (
  <form>
    <Field
      name="categoryKeyword"
      component={poiFirstPageFields}
      label="Sélectionnez une catégorie..."
    />
    <div>
      <button onClick={() => dispatch({ type: 'PREVIOUS_PAGE', page: page - 1 })} type="submit" className="next">Previous</button>
      <button onClick={() => dispatch({ type: 'NEXT_PAGE', page: page + 1 })} type="submit" className="next">Next</button>
    </div>
  </form>
);

CreatePoiFirstPage = connect(
  mapStateToProps,
)(CreatePoiFirstPage);

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(CreatePoiFirstPage);
