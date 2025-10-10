import React, { useState } from 'react';
import { createProduct, updateProduct } from '../api';

const ProductForm = ({ product, onSave }) => {
  const [name, setName] = useState(product ? product.name : '');
  const [description, setDescription] = useState(product ? product.description : '');
  const [price, setPrice] = useState(product ? product.price : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { name, description, price };
    try {
      if (product) {
        await updateProduct(product.id, productData);
      } else {
        await createProduct(productData);
      }
      onSave();
    } catch (error) {
      console.error('Failed to save product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;
