import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import poiFourthPagesFields from './PoiFourthPageFields';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});

let CreatePoiFourthPage = (
  props, onSubmit, page, dispatch,
) => {
  const {
    pristine, submitting,
  } = props;
  return (
    <form onSubmit={onSubmit}>
      <Field
        name="uploadPicture"
        component={poiFourthPagesFields}
      />
      <div>
        <button onClick={() => dispatch({ type: 'PREVIOUS_PAGE', page: page - 1 })} type="submit" className="next">Previous</button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};

CreatePoiFourthPage = connect(
  mapStateToProps,
)(CreatePoiFourthPage);

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(CreatePoiFourthPage);
