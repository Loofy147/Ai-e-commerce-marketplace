import React, { useState, useEffect, useCallback } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import { getProducts } from '../api';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      const { data } = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSave = () => {
    setEditingProduct(null);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm product={editingProduct} onSave={handleSave} />
      <ProductList products={products} onEdit={handleEdit} onDelete={fetchProducts} />
    </div>
  );
};

export default ProductPage;
