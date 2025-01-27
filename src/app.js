const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded requests

// Import routes
const authRoutes = require('./routes/auth');
const emailTemplateRoutes = require('./routes/emailTemplates');
const regulationRoutes = require('./routes/regulation');
const adminRoutes = require('./routes/admin'); // Add admin routes

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/emailTemplates', emailTemplateRoutes);
app.use('/api/regulations', regulationRoutes);
app.use('/api/admin', adminRoutes); // Add admin routes

// Default route for testing
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

module.exports = app;
