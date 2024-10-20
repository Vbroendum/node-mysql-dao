const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

console.log(userController);
router.get('/', userController.getAllUsers);
router.post('/add-user', userController.createUser);

module.exports = router;
