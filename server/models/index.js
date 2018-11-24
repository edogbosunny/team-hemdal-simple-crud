import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

const basename = path.basename(__filename);
const { NODE_ENV } = process.env;
const db = {};

dotenv.config();

let DB_URL;
switch (NODE_ENV) {
  case 'development':
    DB_URL = process.env.LOCAL_DATABASE_URL;
    break;

  case 'production':
    DB_URL = process.env.REMOTE_DATABASE_URL;
    break;

  case 'test':
    DB_URL = process.env.TEST_DATABASE_URL;
    break;

  default:
    DB_URL = process.env.MY_POSTICO_URL;
    break;
}

const sequelize = new Sequelize(DB_URL, DB_URL);

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
