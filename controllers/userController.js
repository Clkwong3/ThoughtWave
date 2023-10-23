// Import the User model from the "../Models/User" file
const User = require("../Models/User");

// Export an object with methods for handling user data
module.exports = {
  // Get all users from the database
  // Endpoint URL: /api/users 
  async getUsers(req, res) {
    try {
      // Use the User model's "find" method to get all users
      const users = await User.find();
      // Respond with the list of users in JSON format
      res.json(users);
    } catch (err) {
      // If there's an error, respond with a 500 status code and the error message
      res.status(500).json(err);
    }
  },

  // Get a single user by their ID
  // Endpoint URL: /api/users/:userId
  async getSingleUser(req, res) {
    try {
      // Use the User model's "findOne" method to find a user with the given ID
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );

      // Check if the user is found or not
      if (!user) {
        // If not found, respond with a 404 status code and a message
        return res.status(404).json({ message: "No user with that ID" });
      }

      // If the user is found, respond with the user data in JSON format
      res.json(user);
    } catch (err) {
      // If there's an error, respond with a 500 status code and the error message
      res.status(500).json(err);
    }
  },

  // Create a new user
  // Endpoint URL: /api/users
  async createUser(req, res) {
    try {
      // Use the User model's "create" method to create a new user with the data from the request body
      const dbUserData = await User.create(req.body);
      // Respond with the newly created user data in JSON format
      res.json(dbUserData);
    } catch (err) {
      // If there's an error, respond with a 500 status code and the error message
      res.status(500).json(err);
    }
  },
};
