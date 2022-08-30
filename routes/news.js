const express = require('express');

const feedController = require('../controllers/news');

const router = express.Router();

router.get('/', feedController.getNews);

module.exports = router;