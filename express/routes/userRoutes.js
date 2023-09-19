const express = require('express');
const userController = require('../controllers/userController');

const { createUser, getAllUsers, getUser, updateUser, deleteUser } =
  userController;

// routes
const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);

router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
