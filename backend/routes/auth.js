const router = require("express").Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (user) {
    res.json({ message: "Login success", user });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

router.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

module.exports = router;