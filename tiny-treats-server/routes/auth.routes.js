const authRouter = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const isAuthenticated = require("../middleware/isAuthenticated");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

authRouter.use(cookieParser());

/* SINGUP ROUTES */

authRouter.post("/signup", async (req, res, next) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return res.status(400).json({ error: "All inputs are required" });
  }
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).json({ error: "User is already registered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const createdUser = await User.create({ email, username, password: hash });
    res.json(createdUser);
  } catch (err) {
    next(err);
  }
});

/* LOGIN ROUTES */

authRouter.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All inputs are required" });
  }
  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const isPasswordMatch = await bcrypt.compare(password, foundUser.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Wrong password" });
    }

    // Generate and send an authentication token (adjust the secret and expiresIn as needed)
    const token = jwt.sign({ userId: foundUser._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    const {
      password: userPassword,
      __v,
      ...userDetails
    } = foundUser.toObject();

    console.log("Current User:", userDetails);
    console.log("Token:", token);

    res.json({ user: userDetails, token });
  } catch (err) {
    next(err);
  }
});

authRouter.get("/auth/verify", isAuthenticated, (req, res) => {
  res.json(req.user);
});

authRouter.post("/logout", isAuthenticated, (req, res) => {
  try {
    // Assuming your token key in local storage is named "token"
    res.clearCookie("token");

    // Additional actions can be performed here before or after removing the token

    // Redirect to the root after successful logout
    res.redirect("/");
  } catch (error) {
    // Handle any errors that may occur during the logout process
    console.error("Error during logout:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = authRouter;
