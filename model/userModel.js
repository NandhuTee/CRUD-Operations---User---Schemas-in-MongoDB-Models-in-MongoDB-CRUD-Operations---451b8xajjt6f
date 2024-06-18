const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // Adding a required field ensures that a user must have a name
  },
  email: {
    type: String,
    required: true, // Adding a required field ensures that a user must have an email
    unique: true // Ensuring that the email is unique in the database
  }
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
