"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _product = _interopRequireDefault(require("./routes/product"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_product.default);
app.use(function (req, res, next) {
  console.log("".concat(new Date().toString(), " => ").concat(req.originalUrl), req.body);
  next();
}); //lokalt:

var server = 'mongodb://it2810-46.idi.ntnu.no:27017/prosjekt4'; //Connect to the database(only done once)
//mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

_mongoose.default.connect(server, {
  useNewUrlParser: true
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});
app.use(_express.default.static('public')); // Handler for 404 - Resource not found

app.use(function (req, res, next) {
  res.status(404).send("We think you are lost!");
}); // Handler for 500

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.sendFile(_path.default.join(__dirname, '../public/500.html'));
});
var PORT = 12000;
module.exports = app.listen(PORT, function () {
  return console.info("Server has started on ".concat(PORT));
}); //here