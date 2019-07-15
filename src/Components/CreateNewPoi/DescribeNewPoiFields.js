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
      <span className="textPage">{label}</span>
      <input
        {...input}
        type={type}
      />
      {touched && error && <span className="textPage">{error}</span>}
    </div>
  </div>
);

export default connect(mapStateToProps)(DescribeNewPoiFields);
