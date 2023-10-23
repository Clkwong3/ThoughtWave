// Import the required Mongoose library to work with MongoDB.
const mongoose = require("mongoose");

// Define the structure of user data in the MongoDB database using a schema.
const userSchema = new mongoose.Schema(
  {
    // Define the user's username with specific constraints.
    username: {
      type: String, // It stores text.
      unique: true, // Ensures each username is unique.
      required: true, // It's mandatory to provide a username.
      trim: true, // Trims extra spaces from usernames.
    },

    // Define the user's email with specific constraints.
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/, // Checks if the email format is valid.
    },

    // Create an array to store references to "Thought" documents.
    thoughts: [
      {
        type: mongoose.Schema.Types.ObjectId, // Establishes a relationship with thoughts.
        ref: "Thought",
      },
    ],

    // Create an array to store references to other "User" documents, representing friends.
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  // Set options for JSON representation of the data.
  {
    // Include special calculations in the output.
    toJSON: {
      virtuals: true,
    },
    // Omit the ID field in the JSON representation.
    id: false,
  }
);

// Define a virtual property "friendCount" that calculates the number of friends a user has.
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create a Mongoose model named "User" based on the "userSchema."
const User = mongoose.model("User", userSchema);

// Export the "User" model to use it in other parts of your application.
module.exports = User;
