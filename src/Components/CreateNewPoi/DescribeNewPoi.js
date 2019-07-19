/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import DescribeNewPoiFields from './DescribeNewPoiFields';
import InputFieldChecked from './validate';
import PreviousPageButton from './PreviousPageButton';

const mapStateToProps = state => ({
  poiKeywordsDisplay: state.pois.poiKeywordsDisplay,
  labelKey: `${state.pois.poiKeywordsDisplay.find(keyword => keyword.id == state.form.poiCreation.values.categoryKeyword).name} - `,
});
class DescribeNewPoi extends Component {
  componentDidMount() {
    const { dispatch, labelKey } = this.props;
    dispatch({ type: 'GET_INPUT', labelKey });
  }

  render() {
    return (
      <form className="formContainer">
        <PreviousPageButton />
        <p className="step">Etape 4/5</p>
        <Field
          name="poiDesc"
          component={DescribeNewPoiFields}
          label="Pour plus de précision, indiquez un nom ou une courte description..."
        />
      </form>
    );
  }
}


export default reduxForm({
  form: 'poiCreation', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: false, // <------ unregister fields on unmount
  InputFieldChecked,
})(connect(mapStateToProps)(DescribeNewPoi));
