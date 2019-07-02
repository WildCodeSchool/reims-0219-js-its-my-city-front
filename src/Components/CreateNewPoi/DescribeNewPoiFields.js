/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../ComponentsCSS/createPoiForm.scss';


const DescribeNewPoiFields = ({
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

export default DescribeNewPoiFields;
