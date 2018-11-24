import express from 'express';
import bodyParser from 'body-parser';

import todoController from '../controllers/todos';
// import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => res.status(200).json({
  status: true,
  Data: {
    message: 'Your jorney begins',
  },
}));

router.post('/api/v1/todo', todoController.create);

export default router;
