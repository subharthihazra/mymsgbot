const express = require('express');
const { fetchChannels } = require('../controllers/fetchController');
const router = express.Router();

router.get('/channels', fetchChannels);

module.exports = router;