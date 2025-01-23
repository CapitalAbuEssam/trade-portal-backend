const express = require('express');
const { updateTemplate, getTemplate } = require('../controllers/emailTemplateController');
const router = express.Router();

// Update an email template by ID
router.put('/:id', updateTemplate);

// Get an email template by name
router.get('/:name', getTemplate);

module.exports = router;
