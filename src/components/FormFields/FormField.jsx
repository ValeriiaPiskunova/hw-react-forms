import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormField = ({ name, type = 'text', as = 'input', placeholder }) => (
  <div className='form__item'>
    <Field name={name} type={type} as={as} placeholder={placeholder} />
    <ErrorMessage name={name} component="div" className="error" />
  </div>
);

export default FormField;