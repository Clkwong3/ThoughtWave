// Import the necessary modules and controllers
const router = require("express").Router();
const apiRoutes = require("./api");

// Use the apiRoutes for URLs starting with '/api'
router.use("/api", apiRoutes);

// Define a catch-all route for any other undefined routes
router.use((req, res) => {
  return res.send("Wrong route!");
});

// Export the router for use in your Express application
module.exports = router;
