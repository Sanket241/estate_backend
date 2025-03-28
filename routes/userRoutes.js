const express = require('express');
const userController = require('../controllers/userController');
const apiKeyMiddleware = require('../middleware/apiKeyMiddleware');

const router = express.Router();

router.post('/register', userController.createUser);
router.get('/profile/:id', apiKeyMiddleware, userController.getUser);
router.patch('/update/:id', apiKeyMiddleware, userController.updateUser);

// New routes
router.get('/all',apiKeyMiddleware , userController.getAllUsersWithFilters);
router.get('/eth/:ethAddress', apiKeyMiddleware, userController.getUserByEthAddress);

module.exports = router;
