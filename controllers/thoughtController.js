// Import the models
const { Thought, User } = require("../model");

module.exports = {
  // Get all thoughts
  // Endpoint URL: /api/thoughts
  async getThoughts(req, res) {
    try {
      // Find all thoughts in the database
      const thoughts = await Thought.find();

      // If successful, respond with a JSON array of thoughts
      res.json(thoughts);
    } catch (err) {
      // If there's an error, respond with a 500 status code and the error message
      res.status(500).json(err);
    }
  },

  // Get a single thought by its ID
  // Endpoint URL: /api/thoughts/:thoughtId
  async getSingleThought(req, res) {
    try {
      // Find a thought in the database by its unique ID
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      // Check if the thought is found or not
      if (!thought) {
        // If not found, respond with a 404 status code and a message
        return res.status(404).json({ message: "No thought with this ID" });
      }

      // If a thought is found, respond with the thought as JSON
      res.json(thought);
    } catch (err) {
      // If there's an error, respond with a 500 status code and the error message
      res.status(500).json(err);
    }
  },

  // Create a new thought
  // Endpoint URL: /api/thoughts
  async createThought(req, res) {
    try {
      // Create a new thought by inserting the request body into the database
      const thought = await Thought.create(req.body);

      // Find the user by their 'username'
      const user = await User.findOne({ username: req.body.username });

      // Check if the user is found or not
      if (!user) {
        // If not found, respond with a 404 status code and a message
        return res.status(404).json({
          message: "Thought is created, but there is no user with that ID",
        });
      }

      // Add the thought's ID to the user's 'Thoughts' array
      user.thoughts.push(thought._id);
      await user.save();

      // If the thought is successfully created and the user's 'Thoughts' array is updated, respond with a success message
      res.json("Thought successfully created!");
    } catch (err) {
      // If there's an error, log the error and respond with a 500 status code and the error message
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Update an existing thought
  // Endpoint URL: /api/thoughts/:thoughtId
  async updateThought(req, res) {
    try {
      // Find and update a thought by its unique ID, using the data provided in the request body
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.ThoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      // Check if the thought is found or not
      if (!thought) {
        // If not found, respond with a 404 status code and a message
        return res.status(404).json({ message: "No thought with this ID" });
      }

      // If the thought is successfully updated, respond with the updated thought as JSON
      res.json(thought);
    } catch (err) {
      // If there's an error, log the error and respond with a 500 status code and the error message
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Delete a thought
  // Endpoint URL: /api/thoughts/:thoughtId
  async deleteThought(req, res) {
    try {
      // Find and remove a thought by its unique ID
      const thought = await Thought.findOneAndRemove({
        _id: req.params.ThoughtId,
      });

      // Check if the thought is found or not
      if (!thought) {
        // If not found, respond with a 404 status code and a message
        return res.status(404).json({ message: "No thought with this ID" });
      }

      // Find and update the associated user to remove the deleted thought's ID from their 'Thoughts' array
      const user = await User.findOneAndUpdate(
        { Thoughts: req.params.ThoughtId },
        { $pull: { Thoughts: req.params.ThoughtId } },
        { new: true }
      );

      // Check if the user is found or not
      if (!user) {
        // If not found, respond with a 404 status code and a message
        return res.status(404).json({
          message: "Thought is created, but there is no user with that ID",
        });
      }

      // If the thought is successfully deleted and the user's 'Thoughts' array is updated, respond with a success message
      res.json({ message: "Thought successfully deleted!" });
    } catch (err) {
      // If there's an error, respond with a 500 status code and the error message
      res.status(500).json(err);
    }
  },

  // Add a reaction to a thought
  // Endpoint URL: /api/thoughts/:thoughtId/reactions
  async addReaction(req, res) {
    try {
      // Find and update a thought by its unique ID to add the provided response to its 'responses' array
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.ThoughtId },
        { $addToSet: { responses: req.body } },
        { runValidators: true, new: true }
      );

      // Check if the thought is found or not
      if (!thought) {
        // If not found, respond with a 404 status code and a message
        return res.status(404).json({ message: "No thought with this ID" });
      }

      // If the reaction is successfully added to the thought, respond with the updated thought as JSON
      res.json(thought);
    } catch (err) {
      // If there's an error, respond with a 500 status code and the error message
      res.status(500).json(err);
    }
  },

  // Remove a reaction from a thought
  // Endpoint URL: /api/thoughts/:thoughtId/reactions/:responseId
  async removeReaction(req, res) {
    try {
      // Find and update a thought by its unique ID to remove the specified reaction from its 'reactions' array
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.ThoughtId },
        { $pull: { reactions: { responseId: req.params.responseId } } },
        { runValidators: true, new: true }
      );

      // Check if the thought is found or not
      if (!thought) {
        // If not found, respond with a 404 status code and a message
        return res.status(404).json({ message: "No thought with this ID" });
      }

      // If the reaction is successfully removed from the thought, respond with the updated thought as JSON
      res.json(thought);
    } catch (err) {
      // If there's an error, respond with a 500 status code and the error message
      res.status(500).json(err);
    }
  },
};
