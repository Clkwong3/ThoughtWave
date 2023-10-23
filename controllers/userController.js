// Import the User model from the "../Models/User" file
const User = require("../model/User");

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

  // Update an existing user by their ID
  // Endpoint URL: /api/users/:userId
  async updateUser(req, res) {
    try {
      // Use the User model's "findOneAndUpdate" method to find and update a user by their ID
      // req.params.userId is the user's ID from the URL
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body }, // Update the user's data with the request body
        { new: true } // Return the updated user data
      );

      // Check if the user is found and updated or not
      if (!updatedUser) {
        // If not found, respond with a 404 status code and a message
        return res.status(404).json({ message: "No user with that ID" });
      }

      // Respond with the updated user data in JSON format
      res.json(updatedUser);
    } catch (err) {
      // If there's an error, respond with a 500 status code and the error message
      res.status(500).json(err);
    }
  },

  // Delete a user by their ID
  // Endpoint URL: /api/users/:userId
  async deleteUser(req, res) {
    try {
      // Use the User model's "findOneAndDelete" method to find and delete a user by their ID
      // req.params.userId is the user's ID from the URL
      const deletedUser = await User.findOneAndDelete({
        _id: req.params.userId,
      });

      // Check if the user is found and deleted or not
      if (!deletedUser) {
        // If not found, respond with a 404 status code and a message
        return res.status(404).json({ message: "No user with that ID" });
      }

      // Respond with a message indicating the successful deletion
      res.json({ message: "User deleted successfully" });
    } catch (err) {
      // If there's an error, respond with a 500 status code and the error message
      res.status(500).json(err);
    }
  },

  // Add a new friend to a user's friend list
  // Endpoint URL: /api/users/:userId/friends/:friendId
  async addFriend(req, res) {
    try {
      // Find and update a user by their ID to add a new friend
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );

      // Check if the user is found or not
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      // Respond with the updated user data in JSON format
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove a friend from a user's friend list
  // Endpoint URL: /api/users/:userId/friends/:friendId
  async removeFriend(req, res) {
    try {
      // Find and update a user by their ID to remove a friend
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      // Check if the user is found or not
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      // Respond with the updated user data in JSON format
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
