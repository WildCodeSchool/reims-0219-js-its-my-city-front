import React from 'react';

const renderField = ({
  input, label, type, meta: { touched, error },
}) => (
  <div>
    <h1>{label}</h1>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderField;
