/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './ComponentsCSS/createPoiForm.css';

// eslint-disable-next-line import/no-mutable-exports
let ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form className="poi-create" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact',
})(ContactForm);

export default ContactForm;
