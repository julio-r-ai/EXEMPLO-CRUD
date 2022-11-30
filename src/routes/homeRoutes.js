const express = require('express');
const HomeController = require('../controllers/HomeController');

const router = express.Router();

router.get('/', HomeController.showHome);
router.get('/contato', HomeController.showContato);
router.get('/login', HomeController.showLogin)
module.exports = router;
