'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 4000;

var app = (0, _express2.default)();

app.listen(port, function () {
  console.log('connected on port ' + port);
});