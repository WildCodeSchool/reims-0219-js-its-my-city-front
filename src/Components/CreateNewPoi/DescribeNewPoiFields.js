import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';

const mapStateToProps = state => ({
  selectedCategoryKeywordTwoName: state.pois.selectedCategoryKeywordTwoName,
});

const DescribeNewPoiFields = ({
  selectedCategoryKeywordTwoName,
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    <div className="poi-name">
      <span>{label}</span>
      <input
        {...input}
        type={type}
        value={`${selectedCategoryKeywordTwoName}`}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default connect(mapStateToProps)(DescribeNewPoiFields);
