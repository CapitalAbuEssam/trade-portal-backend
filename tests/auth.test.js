const { User, sequelize } = require('../src/models');
const request = require('supertest');
const app = require('../src/app');


describe('Authentication API', () => {
    beforeAll(async () => {

        // Sync database before cleaning up or seeding data
        await sequelize.sync({ force: true });
        
        // Clean up Users table before tests
        await User.destroy({ where: {}, truncate: true });
    });

    test('should register a new user', async () => {
        const res = await request(app).post('/api/auth/register').send({
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
            role: 'trader',
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe('User registered successfully');
        expect(res.body.user.email).toBe('john@example.com');
    });

    test('should not register a user with an existing email', async () => {
        const res = await request(app).post('/api/auth/register').send({
            name: 'John Doe',
            email: 'john@example.com', // Duplicate email
            password: 'password123',
            role: 'trader',
        });
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe('Email already in use');
    });

    test('should log in a registered user', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: 'john@example.com',
            password: 'password123',
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Login successful');
        expect(res.body.token).toBeDefined();
    });

    test('should not log in with incorrect password', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: 'john@example.com',
            password: 'wrongpassword',
        });
        expect(res.statusCode).toBe(401);
        expect(res.body.message).toBe('Invalid credentials');
    });

    test('should not log in an unregistered user', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: 'unknown@example.com',
            password: 'password123',
        });
        expect(res.statusCode).toBe(404);
        expect(res.body.message).toBe('User not found');
    });
});
