import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import poiFourthPagesFields from './PoiFourthPageFields';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});

let TakeAPicture = ({
  page, dispatch,
}) => (
  <form>
    <Field
      name="uploadPicture"
      component={poiFourthPagesFields}
    />
    <div>
      <button onClick={() => dispatch({ type: 'PREVIOUS_PAGE', page: page - 1 })} type="button" className="next">Précédent</button>
      <button onClick={() => dispatch({ type: 'NEXT_PAGE', page: page + 1 })} type="button" className="next">Suivant</button>
    </div>
  </form>
);

TakeAPicture = connect(
  mapStateToProps,
)(TakeAPicture);

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(TakeAPicture);
