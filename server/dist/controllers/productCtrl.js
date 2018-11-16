"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _product = _interopRequireDefault(require("../models/product.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductCtrl = function ProductCtrl() {
  _classCallCheck(this, ProductCtrl);

  _defineProperty(this, "get", function (req, res) {
    _product.default.find().then(function (doc) {
      res.json(doc);
    }).catch(function (err) {
      res.status(500).json(err);
    });
  });
}
/*
get = (req, res) => {
  let sorting = {}
  let sortBy = req.query.sortBy ? req.query.sortBy : 'Pris';
  sorting.sortBy = req.query.order
   let content = {};
  if (req.query.Varenavn) {
    content.Varenavn = req.query.Varenavn
  }
  if (req.query.Varetype) {
    content.Varetype = req.query.Varetype
  }
  if (req.query.Land) {
    content.Land = req.query.Land
  }
  if (req.query.Distrikt) {
    content.Distrikt = req.query.Distrikt
  }
   ProductModel.find(content).sort(sorting)
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}
*/
;

var _default = ProductCtrl;
exports.default = _default;