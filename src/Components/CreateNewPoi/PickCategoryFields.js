import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';


const mapStateToProps = state => ({
  poiKeywordsDisplay: state.pois.poiKeywordsDisplay,
});

const PickCategoryFiedls = ({
  input,
  label,
  meta: { touched, error },
  poiKeywordsDisplay,
}) => (
  <div>
    <span>{label}</span>

    <select
      {...input}
    >
      <option value="">
            Choisissez une catégorie
      </option>
      {poiKeywordsDisplay.filter(keyword => keyword.importance === 2)
        .map(keyword => (
          <option key={keyword.name} id={keyword.name} value={keyword.id} required>
            {(keyword.name)}
          </option>
        ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

export default connect(mapStateToProps)(PickCategoryFiedls);
