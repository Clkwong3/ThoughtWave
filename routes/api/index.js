// Import the necessary modules and controllers
const router = require("express").Router();
const thoughtRoutes = require("./thoughtRoutes");
const userRoutes = require("./userRoutes");

// Use the thoughtRoutes for URLs starting with '/thoughts'
router.use("/thoughts", thoughtRoutes);

// Use the userRoutes for URLs starting with '/users'
router.use("/users", userRoutes);

// Export the router for use in your Express application
module.exports = router;
