var express = require('express');
var router = express.Router();
const indexService = require('../services/index');

/* GET home page. */
router.get('/', indexService.calculateStocksYields);

module.exports = router;
