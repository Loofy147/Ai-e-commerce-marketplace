import React, { useState } from 'react';
import { generateStore } from '../api';

const StoregenWizard = () => {
  const [storeName, setStoreName] = useState('');
  const [description, setDescription] = useState('');
  const [productIdeas, setProductIdeas] = useState('');
  const [generatedStore, setGeneratedStore] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await generateStore({
        storeName,
        description,
        productIdeas: productIdeas.split(',').map((idea) => idea.trim()),
      });
      setGeneratedStore(data);
    } catch (error) {
      console.error('Failed to generate store', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>AI Store Generator</h2>
        <input
          type="text"
          placeholder="Store Name"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          required
        />
        <textarea
          placeholder="Describe your store in a few words"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Product ideas (comma-separated)"
          value={productIdeas}
          onChange={(e) => setProductIdeas(e.target.value)}
          required
        />
        <button type="submit">Generate Store</button>
      </form>

      {generatedStore && (
        <div>
          <h3>Generated Store</h3>
          <pre>{JSON.stringify(generatedStore, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default StoregenWizard;
