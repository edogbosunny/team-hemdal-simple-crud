import isEmpty from './is-empty';

const validateTodoInput = (data) => {
  const errors = {};
  if (isEmpty(data.title)) {
    errors.title = 'title is empty';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateTodoInput;
