'use strict';
const router = require('express').Router();
const testCtrl = require('./testcontroller');
router.post('/test', testCtrl.test);
module.exports = router;
