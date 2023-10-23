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
  .get(getThoughts) // GET: http://localhost:3001/api/thoughts/
  .post(createThought); // POST: http://localhost:3001/api/thoughts/

// Define routes for URLs like '/thoughts/:thoughtId'
router
  .route("/:thoughtId")
  .get(getSingleThought) // GET: http://localhost:3001/api/thoughts/:thoughtId
  .put(updateThought) // PUT: http://localhost:3001/api/thoughts/:thoughtId
  .delete(deleteThought); // DELETE: http://localhost:3001/api/thoughts/:thoughtId

// Define a route for reactions on a specific thought
router.route("/:thoughtId/reactions").post(addReaction); // POST: http://localhost:3001/api/thoughts/:thoughtId/reactions

// Define a route for deleting a specific reaction on a thought
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction); // DELETE: http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId

// Export the router so it can be used in your Express application
module.exports = router;
