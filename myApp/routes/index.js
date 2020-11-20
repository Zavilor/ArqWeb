var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trabajo práctico Arquitectura Web', member1: 'Juan Rettori', member2: 'Agustín Blum' });
});

module.exports = router;
