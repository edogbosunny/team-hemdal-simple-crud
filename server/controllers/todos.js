import { Todo } from '../models';

import statusResponse from '../helpers/returnStatus';
import validateTodoInput from '../validation/todo';

// eslint-disable-next-line prefer-destructuring
// const Todo = require('../models').Todo;

class TodoClass {
  static create(req, res) {
    // console.log(req.body);
    const { errors, isValid } = validateTodoInput(req.body);
    if (!isValid) {
      return statusResponse.sendResponseErr(res, 400, false, errors);
    }

    return Todo.create({
      title: req.body.title,
    })
      .then((todo) => {
        const message = 'todo created succesfully';
        return statusResponse.Response(res, 201, message, true, todo);
      })
      .catch(err => statusResponse.sendResponseErr(res, 400, false, err));
  }
}
export default TodoClass;
