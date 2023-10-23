// Import the necessary modules and functions
const router = require("express").Router(); // Create an Express router
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController"); // Import functions from userController

// Define routes and their associated functions
// Handle GET requests with getUsers and POST requests with createUser
// http://localhost:3001/api/users
router.route("/").get(getUsers).post(createUser);

// Handle GET, PUT, and DELETE requests for a single user by ID
// http://localhost:3001/api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// Export the router
module.exports = router;
