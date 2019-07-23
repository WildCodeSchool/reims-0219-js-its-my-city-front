import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';


const DescribeNewPoiFields = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    <div className="categoryContainer">
      <span className="textPage">{label}</span>
      <input
        {...input}
        type={type}
      />
      {touched && error && <span className="textPage">{error}</span>}
    </div>
  </div>
);

export default connect()(DescribeNewPoiFields);
