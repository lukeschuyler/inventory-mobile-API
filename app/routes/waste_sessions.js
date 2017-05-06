'use strict';

const { Router } = require('express');

const { getAll, getOne, addSession, deleteSession } = require('../controllers/waste_sessionCtrl');

const router = Router();

router.get('/waste_sessions', getAll);
router.get('/waste_sessions/:id', getOne);
router.post('/waste_sessions', addSession)
router.delete('/waste_sessions/:id', deleteSession)

module.exports = router;
