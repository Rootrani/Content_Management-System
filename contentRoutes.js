const express = require('express');
const { createContent, getContent } = require('../controllers/contentController');
const router = express.Router();

router.post('/', createContent);
router.get('/', getContent);

module.exports = router;
