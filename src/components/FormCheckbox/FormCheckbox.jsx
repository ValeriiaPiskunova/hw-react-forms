import React from 'react';
import { Field, ErrorMessage } from 'formik';
import "./FormCheckbox.css";

const FormCheckbox = ({ label, name }) => (
 <div className="checkbox-container">
    <Field className="checkbox-item" name={name} type="checkbox" />
    <label className="checkbox-label">{label}</label>
    <ErrorMessage name={name} component="div" className="error" />
  </div>
);

export default FormCheckbox;