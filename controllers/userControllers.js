// Import the necessary modules and models
const User = require('../model/userModel');
const express = require('express');
const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = await User.create({ name, email });
    res.status(201).json({ message: 'User created', data: newUser });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Retrieve a user by ID
router.get('/users/:id', async (req, res) => {
  // Extract the user ID from the request parameters
  const { id } = req.params;

  try {
    // Find the user by ID using User.findById()
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Profile data", user });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a user by ID
router.patch('/users/:id', async (req, res) => {
  // Extract the user ID from the request parameters
  const { id } = req.params;
  // Extract updated user data from the request body
  const userData = req.body;

  try {
    // Use User.findByIdAndUpdate() to update the user
    const user = await User.findByIdAndUpdate(id, userData, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated", user });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a user by ID
router.delete('/users/:id', async (req, res) => {
  // Extract the user ID from the request parameters
  const { id } = req.params;

  try {
    // Use User.findByIdAndDelete() to delete the user
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted", user });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
