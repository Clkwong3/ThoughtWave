// Import the necessary modules and functions
const router = require("express").Router(); // Create an Express router
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userController"); // Import functions from userController

// Define routes and their associated functions
// Handle GET requests with getUsers and POST requests with createUser
router.route("/").get(getUsers).post(createUser);

// Handle GET requests with getSingleUser
router.route("/:userId").get(getSingleUser);

// Export the router
module.exports = router;