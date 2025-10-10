import React from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const ProductPage = () => {
  const handleSave = () => {
    // For now, just reload the page to see the updated list.
    // A more advanced implementation would use state management to update the list.
    window.location.reload();
  };

  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm onSave={handleSave} />
      <ProductList />
    </div>
  );
};

export default ProductPage;
