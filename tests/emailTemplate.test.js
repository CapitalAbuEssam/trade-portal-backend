const { EmailTemplate, sequelize } = require('../src/models');
const request = require('supertest');
const app = require('../src/app');


describe('Email Template API', () => {
    beforeAll(async () => {
        // Sync database before seeding
        await sequelize.sync({ force: true });

        // Seed database with a default template
        await EmailTemplate.create({
            name: 'welcome_email',
            subject: 'Welcome!',
            body: '<h1>Welcome, {{name}}!</h1>',
        });
    });

    test('should update an email template', async () => {
        const res = await request(app).put('/api/emailTemplates/1').send({
            subject: 'Updated Welcome!',
            body: '<h1>Hi, {{name}}, Welcome!</h1>',
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Template updated successfully');
    });

    test('should fetch an email template by name', async () => {
        const res = await request(app).get('/api/emailTemplates/welcome_email');
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('welcome_email');
    });
});
