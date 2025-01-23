const express = require("express");
const { sequelize } = require("./models");
const app = require("./app");
const productRoutes = require('./routes/products'); // Import product routes
app.use('/api/products', productRoutes); // Register the route

const PORT = process.env.PORT || 5001;

// Middleware to parse JSON
app.use(express.json());

sequelize.sync({ force: true }).then(() => {
  console.log("Database synchronized!");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});


// Note: Use { force: true } only during development. It will drop and recreate tables each time you restart the server.