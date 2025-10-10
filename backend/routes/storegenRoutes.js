const express = require('express');
const router = express.Router();
const storegenController = require('../controllers/storegenController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/generate', authMiddleware, storegenController.generateStore);

module.exports = router;
