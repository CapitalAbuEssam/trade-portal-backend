const EmailTemplate = require('../models/EmailTemplate');

// Update an email template
exports.updateTemplate = async (req, res) => {
    try {
        const { id } = req.params;
        const { subject, body } = req.body;

        const template = await EmailTemplate.findByPk(id);
        if (!template) return res.status(404).json({ message: 'Template not found' });

        template.subject = subject;
        template.body = body;
        await template.save();

        res.status(200).json({ message: 'Template updated successfully', template });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get an email template by name
exports.getTemplate = async (req, res) => {
    try {
        const { name } = req.params;
        const template = await EmailTemplate.findOne({ where: { name } });

        if (!template) return res.status(404).json({ message: 'Template not found' });

        res.status(200).json(template);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
