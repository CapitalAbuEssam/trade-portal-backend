// routes/admin.js
const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Adjusted to point directly to the User model

// GET /api/admin/users - List all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email', 'role'], // Fetch only required columns
            order: [['id', 'ASC']], // Order users by ID
        });

        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
});

module.exports = router;
