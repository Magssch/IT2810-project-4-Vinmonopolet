"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _product = _interopRequireDefault(require("../models/product.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var router = _express.default.Router(); // Allow client to fetch data


router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // Can change * to allow request from specific clients

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});
router.get('/product', function (req, res) {
  var sorting = req.query.sorting ? req.query.sorting : 'Pris';
  var order = req.query.order ? req.query.order : '1';
  var page = req.query.page ? req.query.page : 1;
  var pages = parseInt(page);
  var limit = req.query.limit ? req.query.limit : 10;
  var lim = parseInt(limit);
  var content = {};

  if (req.query.Varenavn) {
    content.Varenavn = {
      $regex: RegExp(req.query.Varenavn),
      $options: '-i'
    };
  }

  if (req.query.Pris) {
    content.Pris = req.query.Pris;
  }

  if (req.query.Varetype) {
    content.Varetype = {
      $regex: RegExp(req.query.Varetype),
      $options: '-i'
    };
  }

  if (req.query.Land) {
    content.Land = {
      $regex: RegExp(req.query.Land),
      $options: '-i'
    };
  }

  if (req.query.Distrikt) {
    content.Distrikt = {
      $regex: RegExp(req.query.Distrikt),
      $options: '-i'
    };
  }

  if (req.query.Alkohol) {
    content.Alkohol = req.query.Alkohol;
  }

  if (req.query.Argang) {
    content.Argang = req.query.Argang;
  }

  if (req.query.Volum) {
    content.Volum = req.query.Volum;
  }

  if (req.query.Kategori) {
    content.Kategori = req.query.Kategori;
  }

  _product.default.paginate(content, {
    page: pages,
    limit: lim,
    sort: _defineProperty({}, sorting, [order])
  }).then(function (page) {
    res.json(page);
  }).catch(function (err) {
    res.status(500).json(err);
  });
}); // UPDATE

router.put('/product', function (req, res) {
  if (req.query.Liker) {
    _product.default.findOneAndUpdate({
      Varenummer: req.query.Varenummer
    }, {
      $inc: {
        Liker: 1
      }
    }).then(function (doc) {
      res.json(doc);
    }).catch(function (err) {
      res.status(500).json(err);
    });
  }

  if (req.query.Misliker) {
    _product.default.findOneAndUpdate({
      Varenummer: req.query.Varenummer
    }, {
      $inc: {
        Misliker: 1
      }
    }).then(function (doc) {
      res.json(doc);
    }).catch(function (err) {
      res.status(500).json(err);
    });
  }
}); //Create a new product

router.post('/product', function (req, res) {
  //tell express what to do with the json data
  // req.body
  var model = new _product.default(req.body);
  model.save().then(function (doc) {
    if (!doc || doc.length === 0) {
      return res.status(500).send(doc);
    }

    res.status(201).send(doc);
  }).catch(function (err) {
    res.status(500).json(err);
  });
});
var _default = router;
exports.default = _default;