'use strict';

const { Router } = require('express');

const { getAll, getOne, add } = require('../controllers/inv_sessionCtrl');

const router = Router();

router.get('/inv_sessions', getAll);
router.get('/inv_sessions/:id', getOne);
router.post('/inv_sessions', add)

module.exports = router;
