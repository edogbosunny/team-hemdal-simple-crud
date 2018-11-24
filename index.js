import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import routes from './server/routes';

const PORT = process.env.PORT || 4005;

const app = express();

app.use(routes);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`connected on port ${PORT}`);
});

export default app;
