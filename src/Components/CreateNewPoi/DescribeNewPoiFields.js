import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';

const mapStateToProps = state => ({
  selectedCategoryKeywordTwoName: state.pois.selectedCategoryKeywordTwoName,
});

const DescribeNewPoiFields = ({
  input,
  label,
  type,
  value,
  meta: { touched, error },
}) => (
  <div>
    <div className="categoryContainer">
      <span style={{ textAlign: 'center' }}>{label}</span>
      <input
        {...input}
        type={type}
        value={value}
      />
      {touched && error && <span style={{ textAlign: 'center' }}>{error}</span>}
    </div>
  </div>
);

export default connect(mapStateToProps)(DescribeNewPoiFields);
