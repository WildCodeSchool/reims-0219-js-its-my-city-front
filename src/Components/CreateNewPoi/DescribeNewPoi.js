import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import poiSecondPagesFields from './PoiSecondPageFields';
import validate from './validate';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});

let DescribeNewPoi = ({ page, dispatch }) => (
  <form>
    <Field
      name="poiDesc"
      component={poiSecondPagesFields}
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
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(DescribeNewPoi);
