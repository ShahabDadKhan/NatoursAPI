const express = require("express");
const userControllers = require("./../controllers/userController");

// Routes
const router = express.Router();
router
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.createUser);
router
  .route("/:id")
  .get(userControllers.getUserr)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = router;
