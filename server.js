// Import required modules
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Set the port for the server
const PORT = 3001;

// Create an Express application
const app = express();

// Configure middleware to handle URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Attach the defined routes to the Express app
app.use(routes);

// Wait for the database connection to open
db.once("open", () => {
  // Start the Express app and listen on the specified port
  app.listen(PORT, () => {
    // Log a message when the server is running
    console.log(`API server is running on PORT ${PORT}!`);
  });
});
