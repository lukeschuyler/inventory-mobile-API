'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./inv_line_items'))
router.use(require('./inv_sessions'))
router.use(require('./products'))
router.use(require('./waste_sessions'))
router.use(require('./waste_line_items'))

module.exports = router;
