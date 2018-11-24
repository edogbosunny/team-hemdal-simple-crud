const Response = (response, statusCode, message, status, todo) => response
  .status(statusCode).send({
    status,
    data: {
      message,
      todo,
    },
  });

const sendResponseErr = (response, statusCode, status, errors) => response
  .status(statusCode).send({
    status,
    data: {
      errors,
    },
  });
export default {
  Response, sendResponseErr,
};
