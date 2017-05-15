'use strict';

const { Router } = require('express');

const { search } = require('../controllers/amazonCtrl');

const router = Router();

router.get('/search', search);


module.exports = router;
