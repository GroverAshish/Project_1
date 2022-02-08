const express = require('express');
const router = express.Router();
const ctr = require('../controllers/user');

// SIP Calculation
router.post('/sip', ctr.sip_ctr);

module.exports = router;
