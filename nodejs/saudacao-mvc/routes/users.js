var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>Bem vindo(a) rota de Usuários</h1>');
});

module.exports = router;
