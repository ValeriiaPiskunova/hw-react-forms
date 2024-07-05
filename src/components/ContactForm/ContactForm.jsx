import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormFields from "../FormFields/FormFields";
import FormCheckbox from "../FormCheckbox/FormCheckbox";
import SuccessMessage from "../Validation/SuccessMessage";
import { validate } from "../Validation/Validation";
import "./ContactForm.css";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
          approval: false,
        }}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            setFormSubmitted(true);
            resetForm();
            setTimeout(() => setFormSubmitted(false), 3000);
          }, 500);
        }}
      >
        {() => (
          <Form className="form">
            <FormFields />
            <FormCheckbox
              label="Надсилати мені оновлення про академію"
              name="approval"
            />
            <button type="submit" className="main-btn">
              Надіслати
            </button>
          </Form>
        )}
      </Formik>
      {formSubmitted && <SuccessMessage />}
    </div>
  );
};

export default ContactForm;
