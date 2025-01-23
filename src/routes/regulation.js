const express = require('express');
const { createRegulation, getAllRegulations } = require('../controllers/regulationController'); // Added missing controller function
const { validateRegulation } = require('../middlewares/validation');
const router = express.Router();

router.post('/', validateRegulation, createRegulation);
router.get('/', getAllRegulations); // Added GET endpoint for fetching all regulations

module.exports = router;
