const db = require('../db');

const Product = {
  async create(name, description, price) {
    const result = await db.query(
      'INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *',
      [name, description, price]
    );
    return result.rows[0];
  },

  async findAll() {
    const result = await db.query('SELECT * FROM products');
    return result.rows;
  },

  async findById(id) {
    const result = await db.query('SELECT * FROM products WHERE id = $1', [id]);
    return result.rows[0];
  },

  async update(id, name, description, price) {
    const result = await db.query(
      'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
      [name, description, price, id]
    );
    return result.rows[0];
  },

  async delete(id) {
    await db.query('DELETE FROM products WHERE id = $1', [id]);
  }
};

module.exports = Product;
