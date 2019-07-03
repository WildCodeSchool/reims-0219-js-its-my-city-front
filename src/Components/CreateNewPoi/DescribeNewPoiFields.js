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
      <h1>{label}</h1>
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
