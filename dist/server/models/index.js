'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basename = _path2.default.basename(__filename);
var db = {};

_dotenv2.default.config();
var NODE_ENV = process.env.NODE_ENV || 'development';

var DB_URL = void 0;
switch (NODE_ENV) {
  case 'development':
    DB_URL = process.env.DEV_DB_URL;
    break;

  case 'production':
    DB_URL = process.env.PROD_DB_URL;
    break;

  case 'test':
    DB_URL = process.env.TEST_DB_URL;
    break;

  default:
    DB_URL = process.env.MY_POSTICO_URL;
    break;
}

// console.log(process.env[config[NODE_ENV].use_env_variable]);

var sequelize = new _sequelize2.default(DB_URL, _config2.default[NODE_ENV]);

_fs2.default.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = sequelize.import(_path2.default.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = _sequelize2.default;

exports.default = db;