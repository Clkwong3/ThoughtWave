// Import required parts of the Mongoose library
const { connect, connection } = require("mongoose");

// Connect to the MongoDB database at the specified URL
connect("mongodb://127.0.0.1:27017/socialNetworkAPI");

// Export the database connection for use in other parts of the application
module.exports = connection;
