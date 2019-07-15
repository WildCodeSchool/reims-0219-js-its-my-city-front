import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import DescribeNewPoiFields from './DescribeNewPoiFields';
import validate from './validate';
import PreviousPageButton from './PreviousPageButton';
import NextPageButton from './NextPageButton';

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
  }
}

DescribeNewPoi = connect(mapStateToProps)(DescribeNewPoi);

export default reduxForm({
  form: 'poiCreation', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: false, // <------ unregister fields on unmount
  validate,
})(DescribeNewPoi);
