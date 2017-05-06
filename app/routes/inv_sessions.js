'use strict';

const { Router } = require('express');

const { getAll, getOne, addSession, deleteSession } = require('../controllers/inv_sessionCtrl');

const router = Router();

router.get('/inv_sessions', getAll);
router.get('/inv_sessions/:id', getOne);
router.post('/inv_sessions', addSession)
router.delete('/inv_sessions/:id', deleteSession)

module.exports = router;
