import "./Validation.css";

export const validate = values => {
  const errors = {};

  if (!values.name || values.name.length < 4) {
    errors.name = 'Юзернейм має містити мінімум 4 символи';
  }

  if (!values.email) {
    errors.email = 'Вкажи електронну пошту';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Неправильна адреса електронної пошти';
  }

  if (!values.phone) {
    errors.phone = 'Вкажи номер телефону';
  } else if (!/^\+380\d{9}$/.test(values.phone)) {
    errors.phone = 'Перевір формат номеру телефону';
  }

  if (!values.message || values.message.length < 10) {
    errors.message = 'Повідомлення має бути не менше 10 символів';
  }

  if (!values.approval) {
    errors.approval = 'Краще підпишись на оновлення';
  }

  return errors;
};