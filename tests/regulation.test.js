const { Regulation, sequelize } = require('../src/models');
const request = require('supertest');
const app = require('../src/app');


describe('Regulation API', () => {
    beforeAll(async () => {

        // Sync database before cleaning up or seeding data
        await sequelize.sync({ force: true });
        
        // Clean up Regulations table before tests
        await Regulation.destroy({ where: {}, truncate: true });
    });

    test('should create a new regulation', async () => {
        const res = await request(app).post('/api/regulations').send({
            title: 'Trade Regulation 101',
            description: 'This is a test regulation.',
            stakeholder_id: 1, // Assume a stakeholder exists with this ID
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe('Trade Regulation 101');
    });

    test('should fetch all regulations', async () => {
        const res = await request(app).get('/api/regulations');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    test('should not create a regulation with missing fields', async () => {
        const res = await request(app).post('/api/regulations').send({
            description: 'Missing title and stakeholder_id',
        });
        expect(res.statusCode).toBe(400); // Joi validation should catch this
        expect(res.body.message).toBeDefined();
    });
});
