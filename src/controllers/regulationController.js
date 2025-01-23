const { Regulation } = require('../models'); // Adjusted import to use models/index.js

exports.createRegulation = async (req, res) => {
    try {
        const { title, description, stakeholder_id } = req.body;

        const regulation = await Regulation.create({ title, description, stakeholder_id });
        res.status(201).json(regulation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllRegulations = async (req, res) => {
    try {
        const regulations = await Regulation.findAll(); // Corrected variable name
        res.status(200).json(regulations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
