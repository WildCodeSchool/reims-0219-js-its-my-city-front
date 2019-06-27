import React from 'react';
import '../ComponentsCSS/createPoiForm.scss';


const poiSecondPageFields = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    <div className="poi-name">
      <label>{label}</label>
      <input
        {...input}
        placeholder={label}
        type={type}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default poiSecondPageFields;
