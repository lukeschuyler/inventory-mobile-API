'use strict';

const { Router } = require('express');

const { getAll, getOne, addSession } = require('../controllers/inv_sessionCtrl');

const router = Router();

router.get('/inv_sessions', getAll);
router.get('/inv_sessions/:id', getOne);
router.post('/inv_sessions', addSession)

module.exports = router;
