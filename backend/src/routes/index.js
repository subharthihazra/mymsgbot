const express = require('express');
const router = express.Router();
const messageRoutes = require('./messageRoutes');
const fetchRoutes = require('./fetchRoutes');

router.use('/messages', messageRoutes);
router.use('/fetch', fetchRoutes);

module.exports = router;
