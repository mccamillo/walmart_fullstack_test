var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Product = require('../models/Product.js');

/* GET /products listing. */
router.get('/', function(req, res, next) {
  Product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* POST /products */
router.post('/', function(req, res, next) {
  Product.create(req.body, function (err, post) {
    if (err) return next(err);
    res.redirect('http://localhost:9000/#/cart');
  });
});

/* DELETE /products/:id */
router.delete('/:id', function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
  });
});

module.exports = router;
