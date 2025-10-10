import React from 'react';
import { deleteProduct } from '../api';

const ProductList = ({ products, onEdit, onDelete }) => {
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      onDelete();
    } catch (error) {
      console.error('Failed to delete product', error);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => onEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
