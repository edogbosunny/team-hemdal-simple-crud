import isEmpty from './is-empty';

const validateTodoItemsInput = (data) => {
  const errors = {};
  if (isEmpty(data.content)) {
    errors.content = 'content field is empty';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateTodoItemsInput;
