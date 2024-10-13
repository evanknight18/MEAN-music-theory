const express = require('express');
const router = express.Router();
const theoryController = require('../controllers/theoryController');

router.get('/scales', theoryController.getAllScales);

module.exports = router;
