import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import DescribeNewPoiFields from './DescribeNewPoiFields';
import validate from './validate';
import PreviousPageButton from './PreviousPageButton';
import NextPageButton from './NextPageButton';

let DescribeNewPoi = () => (
  <form className="formContainer">
    <Field
      name="poiDesc"
      component={DescribeNewPoiFields}
      label="Indiquez un nom ou une courte description..."
    />
    <div>
      <PreviousPageButton />
      <NextPageButton />
    </div>
  </form>
);

DescribeNewPoi = connect()(DescribeNewPoi);

export default reduxForm({
  form: 'poiCreation', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(DescribeNewPoi);
