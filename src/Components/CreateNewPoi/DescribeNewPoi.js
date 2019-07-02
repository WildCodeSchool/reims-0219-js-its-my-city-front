import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import DescribeNewPoiFields from './DescribeNewPoiFields';
import validate from './validate';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});

let DescribeNewPoi = ({ page, dispatch }) => (
  <form>
    <Field
      name="poiDesc"
      component={DescribeNewPoiFields}
      label="Indiquez un nom ou une courte description..."
    />
    <div>
      <button onClick={() => dispatch({ type: 'PREVIOUS_PAGE', page: page - 1 })} type="submit" className="previous">Précédent</button>
      <button onClick={() => dispatch({ type: 'NEXT_PAGE', page: page + 1 })} type="submit" className="next">Suivant</button>
    </div>
  </form>
);

DescribeNewPoi = connect(
  mapStateToProps,
)(DescribeNewPoi);

export default reduxForm({
  form: 'poiCreation', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(DescribeNewPoi);
