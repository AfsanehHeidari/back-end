const express = require('express');
const healthCheck = require('./healthCheckRoute');
const petCategory = require('./petCategoryRoute');
const petImage = require('./petImageRoute');

const router = express.Router();

router.use(healthCheck);
router.use(petCategory);
router.use(petImage);

module.exports = router;

