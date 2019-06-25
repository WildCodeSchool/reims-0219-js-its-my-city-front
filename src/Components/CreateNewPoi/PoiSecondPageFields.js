import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.css';

const mapStateToProps = state => ({
  name: state.pois.name,
});
const poiSecondPageFields = ({
  dispatch,
}) => (
  <div className="poi-create">
    <div className="poi-name">
      <label htmlFor="name">Nom</label>

      <input
        type="text"
        id="name"
        name="name"
        onChange={e => dispatch({ type: 'HANDLE_FORM_NAME_CHANGE', name: e.target.value })}
        required
      />
    </div>
  </div>
);

export default connect(mapStateToProps)(poiSecondPageFields);
