//reference customer model:
import express from 'express';
import ProductModel from '../models/product.model';

const router = express.Router();

// GET by param, if param unspecified it returns all
/*
Specifying the sortBy parameter allows you to chose how the list is sorted:
  Volum, Pris, Varenummer, Literpris, Fylde, Friskhet, Bitterhet, Sodme, Argang(Noen har ikke Årgang),
  Alkohol, Sukker, APK
Specifying the respective keys allows for searching for specific products, for example: Land=Italia
 Allowed: Varenavn, Varetype, land, Distrikt
Using && between keys allows for specifying several types
 */

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


router.get('/product',(req, res) => {
  let sorting = req.query.sorting ? req.query.sorting: 'Pris';
  let order = req.query.order ? req.query.order : '1';
  let page = req.query.page ? req.query.page : 1;
  let pages=parseInt(page);
  let limit = req.query.limit ? req.query.limit : 10;
  let lim=parseInt(limit);

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

  ProductModel.paginate(content,{
    page: pages,
    limit: lim,
    sort: {[sorting]:[order]}
  }).then(page => {
    res.json(page)
  })
    .catch(err => {
      res.status(500).json(err)
    })
});

export default router;