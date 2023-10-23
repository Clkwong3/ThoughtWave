// Import required modules from the Mongoose library.
const { Schema, Types } = require("mongoose");

// Define a new schema for a "reaction."
const reactionSchema = new Schema(
  {
    // Define the field for a unique reaction ID.
    reactionId: {
      type: Schema.Types.ObjectId, // It's of type ObjectId.
      default: () => new Types.ObjectId(), // It has a default value of a new ObjectId.
    },
    // Define the field for the reaction body (content).
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    // Define the field for the username of the user who reacted.
    username: {
      type: String,
      required: true,
    },
    // Define the field for the creation timestamp of the reaction.
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleDateString(),
    },
  },
  {
    // Configuration options for the schema.
    toJSON: {
      getters: true, // Enable the use of "getters" when converting this schema to JSON.
    },
    id: false,
  }
);

// Export the defined reaction schema
module.exports = reactionSchema;
