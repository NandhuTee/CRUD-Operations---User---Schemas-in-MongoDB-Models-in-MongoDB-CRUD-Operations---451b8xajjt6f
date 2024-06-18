const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  // Implement the user schema fields:
  // name as String and
  // email as a String,
  name:{
    type:String
  },
  email:{
    type:String,
  }
});

// Create and export the User model
module.exports =mongoose.model('User',userScheme);
