// Import necessary components from Mongoose
const { Schema, model } = require("mongoose");

// Import the schema for reactions from a separate file
const reactionSchema = require("./reactionSchema");

// Define the schema for "Thought" documents
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true, // It must have a value
      minLength: 1, // Minimum length of 1 character
      maxLength: 280, // Maximum length of 280 characters
    },
    createdAt: {
      type: Date,
      default: Date.now, // Default value is the current date
      get: (date) => date.toLocaleDateString(), // Format date to a localized string
    },
    username: {
      type: String,
      required: true, // It must have a value
    },
    reactions: [reactionSchema], // An array of reactionSchema documents
  },
  {
    // Options for the schema
    toJSON: {
      virtuals: true, // Include virtual properties in JSON representations
    },
    id: false, // Exclude the default id field
  }
);

// Create a virtual property to calculate the reaction count
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Create a Mongoose model named "Thought" based on the schema
const Thought = model("Thought", thoughtSchema);

// Export the "Thought" model for use in other parts of the application
module.exports = Thought;
