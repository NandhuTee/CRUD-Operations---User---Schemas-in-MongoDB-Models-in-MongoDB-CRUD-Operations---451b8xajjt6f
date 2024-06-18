// Import the necessary modules and models
const User = require('../model/userModel');
const express = require('express');
const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  // Extract user data from the request body
  const { name, email } = req.body;

  try {
    // Create a new user using User.create()
    const newUser = await User.create({ name, email });
    
    // Handle success: Respond with a 201 status code and the created user
    res.status(201).json({ message: 'User created', data: newUser });
  } catch (err) {
    // Handle errors: Respond with appropriate error messages and status codes
    res.status(500).json({ message: 'Internal server error' }); 
    // Fix here: Added `{}` around the JSON object
  }
  res.status(400).json({ });
});


// Retrieve a user by ID
router.get('/users/:id', async (req, res) => {

  // Implement user retrieval logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  const {id} =req.params;
  // 2. Find the user by ID using User.findById()
  try{
    const user =await User.findById(id);
  if(!user){
    return res.status(404).json({message: "User not found"});
  }
  return res.status(200).json({message:"Profile data" , user})
  }catch(err){
    res.status(500).json({ message: 'Internal server error' });
  }  
  res.status(400).json({ });
  // 3. Handle success: Respond with a 200 status code and the user data
  // 4. Handle errors: Respond with appropriate error messages and status codes

});

// Update a user by ID
router.patch('/users/:id', async (req, res) => {
  // Implement user update logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  const {id} =req.params;
  // 2. Extract updated user data from the request body (req.body)
  const userData =req.body;
  // 3. Use User.findByIdAndUpdate() to update the user
  try{
  const user =User.findByIdAndUpdate(id,userData ,{new:true})
  if(!user){
    return res.status(404).json({message: "User not found"});
  }
  return res.status(200).json({message:"User Updated" , user});
  }catch(err){
    res.status(500).json({ message: 'Internal server error' });
  }  
  // 4. Handle success: Respond with a 200 status code and the updated user data
  // 5. Handle errors: Respond with appropriate error messages and status codes
  res.status(400).json({  });
});

// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
  try{
    const user =User.findByIdAndDelete(id)
    if(!user){
      return res.status(404).json({message: "User not found"});
    }
    return res.status(200).json({message:"User User Deleted" , user});
    }catch(err){
      res.status(500).json({ message: 'Internal server error' });
    }  
    // 4. Handle success: Respond with a 200 status code and the updated user data
    // 5. Handle errors: Respond with appropriate error messages and status codes
    res.status(400).json({ });
  
  
  // Implement user deletion logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  // 2. Use User.findByIdAndDelete() to delete the user
  // 3. Handle success: Respond with a 200 status code and a deletion confirmation message
  // 4. Handle errors: Respond with appropriate error messages and status codes
  
});

module.exports = router;
