const request = require('supertest');
const express = require('express');
const authRoutes = require('./routes/authRoutes');

// Mock the user model
jest.mock('./models/user', () => ({
  create: jest.fn().mockResolvedValue({ id: 1 }),
  findByEmail: jest.fn().mockResolvedValue(null),
}));

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

describe('Auth Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should not register a user with an existing email', async () => {
    // Mock that the user already exists
    const User = require('./models/user');
    User.findByEmail.mockResolvedValue({ id: 2 });

    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser2',
        email: 'test2@example.com',
        password: 'password',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message', 'User with this email already exists');
  });
});
