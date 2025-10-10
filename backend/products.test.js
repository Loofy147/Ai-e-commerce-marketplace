const request = require('supertest');
const express = require('express');
const productRoutes = require('./routes/productRoutes');

// Mock the product model
jest.mock('./models/Product', () => ({
  create: jest.fn().mockResolvedValue({ id: 1, name: 'Test Product' }),
  findAll: jest.fn().mockResolvedValue([{ id: 1, name: 'Test Product' }]),
}));

// Mock the auth middleware
jest.mock('./middleware/authMiddleware', () => (req, res, next) => {
  req.userId = 1;
  next();
});

const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);

describe('Product Endpoints', () => {
  it('should create a new product', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({
        name: 'Test Product',
        description: 'This is a test product',
        price: 9.99,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
