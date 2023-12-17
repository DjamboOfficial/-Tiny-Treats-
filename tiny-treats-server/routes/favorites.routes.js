// routes/favorites.routes.js
const express = require("express");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const User = require("../models/User.model");

const router = express.Router();

// Add product to favorites
router.get(
  "/add-to-favorite-list/:_id",
  isAuthenticated,
  async (req, res, next) => {
    const { _id } = req.params;
    const userId = req.user.userId;

    try {
      // Find user by ID
      const foundUser = await User.findById(userId);

      if (!foundUser) {
        return res.status(404).send("User not found");
      }

      // Check if the product already exists in favorites
      if (!foundUser.favorites.includes(_id)) {
        foundUser.favorites.push(_id);
        await foundUser.save();
        return res.status(200).send("Product added to favorites successfully");
      } else {
        return res.status(200).send("Product already in favorites");
      }
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
