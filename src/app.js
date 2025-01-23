const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded requests

// Routes
const authRoutes = require('./routes/auth');
const emailTemplateRoutes = require('./routes/emailTemplates');
const regulationRoutes = require('./routes/regulation');

app.use('/api/auth', authRoutes);
app.use('/api/emailTemplates', emailTemplateRoutes);
app.use('/api/regulations', regulationRoutes);

// Default route for testing
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

module.exports = app;
