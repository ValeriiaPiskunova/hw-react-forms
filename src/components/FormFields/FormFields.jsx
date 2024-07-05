import React from 'react';
import FormField from './FormField';
import "./FormFields.css";

const FormFields = () => (
    <>
        <FormField placeholder="Ім'я та прізвище" name="name" type="text" />
        <FormField placeholder="Email" name="email" type="email" />
        <FormField placeholder="Телефон (у форматі +380)" name="phone" type="text" />
        <FormField placeholder="Повідомлення" name="message" as="textarea" />
    </>
);

export default FormFields;