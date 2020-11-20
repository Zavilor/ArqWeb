var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController')
const path = require('path');

router.get('/index', controller.list);

router.get('/register', controller.formRegister);
router.post('/register', controller.register);

router.get('/profile/:email', controller.detail);
router.put('/profile/:email', controller.update);
router.delete('/pofile/:email', controller.delete);





module.exports = router;
