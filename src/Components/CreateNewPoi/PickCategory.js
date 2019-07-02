import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PickCategoryFields from './PickCategoryFields';
import validate from './validate';
import '../ComponentsCSS/createPoiForm.scss';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});

let PickCategory = ({ page, dispatch }) => (
  <form>
    <Field
      name="categoryKeyword"
      component={PickCategoryFields}
      label="Sélectionnez une catégorie..."
    />
    <div>
      <button onClick={() => dispatch({ type: 'PREVIOUS_PAGE', page: page - 1 })} type="submit" className="previous">Précédent</button>
      <button onClick={() => dispatch({ type: 'NEXT_PAGE', page: page + 1 })} type="submit" className="next">Suivant</button>
    </div>
  </form>
);

PickCategory = connect(
  mapStateToProps,
)(PickCategory);

export default reduxForm({
  form: 'poiCreation', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(PickCategory);
