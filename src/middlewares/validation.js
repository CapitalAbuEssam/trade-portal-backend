const Joi = require('joi');

// Define the schema for regulation validation
const regulationSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    stakeholder_id: Joi.number().required(),
});

// Middleware function to validate regulations
exports.validateRegulation = (req, res, next) => {
    const { error } = regulationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
