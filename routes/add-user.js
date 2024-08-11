const express = require('express');
const router = express.Router();
const userController = require('../controller/userData');

// Get user data
router.get('/', userController.getUserData);

// Get all users
router.get('/api/users', userController.getAllUsers);

// Create user
router.post('/api/users', userController.postUserData);

// Update user
router.put('/api/users/:id', userController.updateUser);

// Delete user
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;
