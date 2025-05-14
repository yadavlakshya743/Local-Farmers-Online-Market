const express = require('express');
require('dotenv').config();
const connectDB = require('./Connection/connectDB');
const userRoutes = require('./Router/User')
const app = express();
const productRoutes = require('./Router/Product');
const orderRoutes = require('./Router/Order');


connectDB(); 

app.use(express.json());

const port = process.env.PORT || 8000;

app.use('/api/auth', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});