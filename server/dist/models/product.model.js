"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoosePaginate = _interopRequireDefault(require("mongoose-paginate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Schema need to specify in mongodb for validation
//this is done in application layer
var ProductSchema = new _mongoose.default.Schema({
  Varenummer: Number,
  Varenavn: String,
  Volum: Number,
  Pris: Number,
  Literpris: Number,
  Varetype: String,
  Fylde: String,
  Friskhet: Number,
  Bitterhet: Number,
  Sodme: String,
  Farge: String,
  Lukt: String,
  Passertil01: String,
  Passertil02: String,
  Passertil03: String,
  Land: String,
  Distrikt: String,
  Argang: Number,
  Rastoff: String,
  Alkohol: Number,
  Sukker: Number,
  Syre: String,
  Produsent: String,
  Vareurl: String,
  APK: Number,
  Liker: Number,
  Misliker: Number,
  Kategori: String
}, {
  collection: 'inventory'
}); // Pagination for only sending a few items at once

ProductSchema.plugin(_mongoosePaginate.default); //Export schema as mongoose model

module.exports = _mongoose.default.model('inventory', ProductSchema); //const Product = mongoose.model('Product', ProductSchema);

var _default = ProductSchema;
exports.default = _default;