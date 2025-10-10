exports.generateStore = async (req, res) => {
  const { storeName, description, productIdeas } = req.body;

  // In a real application, you would integrate with an AI service here.
  // For now, we'll just mock a response.
  const generatedStore = {
    name: storeName,
    description: `A wonderful store called ${storeName}, based on the idea: "${description}".`,
    products: productIdeas.map((idea, index) => ({
      id: index + 1,
      name: `Product based on "${idea}"`,
      description: `A fantastic product inspired by the idea: "${idea}".`,
      price: (Math.random() * 100).toFixed(2),
    })),
  };

  res.json(generatedStore);
};
