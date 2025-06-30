const express = require("express");
const pool = require("../db"); // PostgreSQL connection
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config(); // Load .env file

const router = express.Router();

// Admin login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt →", email, password);

  try {
    // 1. Check if email exists in DB
    const result = await pool.query(
      'SELECT * FROM public.admin_login WHERE "Email" = $1',
      [email]
    );

    // 2. If no user found
    if (result.rows.length === 0) {
      console.log("Admin not found");
      return res.status(404).json({ message: "Admin not found" });
    }

    const user = result.rows[0];
    console.log("User found →", user);

    // 3. Check if password matches
    const isMatch = await bcrypt.compare(password, user.Password);
    console.log("Password match? →", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // 4. Create JWT token
    const token = jwt.sign(
      { id: user.id, email: user.Email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("Login successful");
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error", err });
  }
});

module.exports = router;
