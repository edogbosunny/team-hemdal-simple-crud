import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./server/routes')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to Heimdal Team :(',
}));

app.listen(PORT, () => {
  console.log(`connected on port ${PORT}`);
});
export default app;
