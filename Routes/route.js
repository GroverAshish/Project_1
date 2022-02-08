const express = require('express');
const router = express.Router();
const srv = require('../controllers/user');

// SIP Calculation
router.post('/SIP', srv.sip);

module.exports = router;
