// routes/admin.js
const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Import the User model

// 🟢 GET /admin/users - List all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: [
                'id', 
                'firstName', 
                'lastName', 
                'email', 
                'phone', 
                'companyName', 
                'companySector', 
                'role', 
                'createdAt', 
                'updatedAt'
            ],
            order: [['id', 'ASC']], // Optional: Order by user ID
        });
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
});

// 🛑 NEW: DELETE /admin/users/:id - Delete a user
router.delete('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // Find the user
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        // Delete the user from the database
        await user.destroy();

        res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "An error occurred while deleting the user." });
    }
});

module.exports = router;
