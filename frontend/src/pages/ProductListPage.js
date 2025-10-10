import React, { useState, useEffect } from 'react';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
