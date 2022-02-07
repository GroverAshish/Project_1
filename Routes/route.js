const express = require('express');
const router = express.Router();
const srv = require('../Services/user');

// SIP Calculation
router.post('/', srv.sip);

module.exports = router;
