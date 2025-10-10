const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const storegenRoutes = require('./routes/storegenRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/storegen', storegenRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
