const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
   
  },
  email: {
    type: String,
   
  }
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
