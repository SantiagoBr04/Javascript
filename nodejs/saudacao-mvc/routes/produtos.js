var express = require('express');
var router = express.Router();
var produtosController = require('../controllers/produtosController');

/* GET users listing. */
router.get("/",produtosController.produtos);
router.get("/camisetas", produtosController.camisetas);

module.exports = router;
