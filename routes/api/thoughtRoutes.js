// Import the required modules and controllers
const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// Define routes for the root URL, e.g., '/thoughts'
router
  .route("/")
  .get(getThoughts) // Handles GET requests to fetch thoughts
  .post(createThought); // Handles POST requests to create a new thought

// Define routes for URLs like '/thoughts/:thoughtId'
router
  .route("/:thoughtId")
  .get(getSingleThought) // Handles GET requests to fetch a single thought
  .put(updateThought) // Handles PUT requests to update a thought
  .delete(deleteThought); // Handles DELETE requests to delete a thought

// Define a route for reactions on a specific thought
router.route("/:thoughtId/reactions").post(addReaction); // Handles POST requests to add a reaction to a thought

// Define a route for deleting a specific reaction on a thought
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction); // Handles DELETE requests to remove a specific reaction

// Export the router so it can be used in your Express application
module.exports = router;
