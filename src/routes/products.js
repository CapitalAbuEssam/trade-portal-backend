const express = require("express");
const { Product, User } = require("../models"); // Import models
const { authenticateToken } = require("../middlewares/auth"); // Import authentication middleware
const router = express.Router();

// Add a product (Traders only)
router.post("/", authenticateToken, async (req, res) => {
    const { id: userId, role } = req.user; // Extract user ID and role from token

    if (role !== "trader") {
        return res.status(403).json({ success: false, message: "Access denied. Only traders can add products." });
    }

    try {
        // Validate if the user exists and is a trader
        const trader = await User.findOne({ where: { id: userId, role: 'trader' } });

        if (!trader) {
            console.error("Trader not found for user ID:", userId); // Debugging
            return res.status(404).json({ success: false, message: "Trader not found." });
        }

        const { name, hsCode, classification, chapter, imageUrl } = req.body;

        const product = await Product.create({
            name,
            hs_code: hsCode,
            classification,
            chapter,
            image_url: imageUrl,
            trader_id: trader.id,
        });

        res.status(201).json({ success: true, message: "Product added successfully.", product });
    } catch (error) {
        console.error("Error adding product:", error); // Debugging
        res.status(500).json({ success: false, message: "Failed to add product." });
    }
});

// View all products (Accessible to all roles)
router.get("/", authenticateToken, async (req, res) => {
    try {
        const products = await Product.findAll({
            include: { model: User, as: 'trader', attributes: ['name', 'email'] },
        });
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: "Failed to fetch products." });
    }
});

module.exports = router;
