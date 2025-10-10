const db = require('../db');

const Product = {
  async create(name, description, price) {
    const { rows } = await db.query(
      'INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *',
      [name, description, price]
    );
    return rows[0];
  },

  async findAll() {
    const { rows } = await db.query('SELECT * FROM products');
    return rows;
  },

  async findById(id) {
    const { rows } = await db.query('SELECT * FROM products WHERE id = $1', [id]);
    return rows[0];
  },

  async update(id, name, description, price) {
    const { rows } = await db.query(
      'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
      [name, description, price, id]
    );
    return rows[0];
  },

  async delete(id) {
    const { rows } = await db.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    return rows[0];
  },
};

module.exports = Product;
