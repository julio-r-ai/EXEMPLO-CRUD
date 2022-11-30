const express  = require('express');
const UserController = require('../controllers/HomeController')

const router = express.Router();

router.get('/usuarios', UserController.showUsuarios);

module.exports = router;
