/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';


const mapStateToProps = state => ({
  poiKeywordsDisplay: state.pois.poiKeywordsDisplay,
});

const poiFirstPageFields = ({
  input,
  label,
  meta: { touched, error },
  poiKeywordsDisplay,
}) => (
  <div>
    <label>{label}</label>

    <select
      {...input}
    >
      <option value="">
            Choisissez une catégorie
      </option>
      {poiKeywordsDisplay.filter(keyword => keyword.importance === 2)
        .map(keyword => (
          <option key={keyword.name} id={keyword.name} value={keyword.name} required>
            {(keyword.name)}
          </option>
        ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

export default connect(mapStateToProps)(poiFirstPageFields);
