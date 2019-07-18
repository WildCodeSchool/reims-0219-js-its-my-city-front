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
  <div className="categoryContainer">
    <span>{label}</span>

    <select
      style={{
        width: '66vw',
        height: '13vh',
        fontSize: '1rem',
      }}
      {...input}
    >
      <option value="">
            Choisissez une catégorie
      </option>
      {poiKeywordsDisplay.filter(keyword => keyword.importance === 2)
        .map(keyword => (
          <option
            key={keyword.name}
            id={keyword.name}
            value={keyword.id}
          >
            {(keyword.name)}
          </option>
        ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

export default connect(mapStateToProps)(PickCategoryFiedls);
