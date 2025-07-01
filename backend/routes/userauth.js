// const express = require("express");
// const router = express.Router();
// const pool = require("../db");
// const bcrypt = require("bcryptjs");

// router.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     await pool.query(
//       "INSERT INTO user_login (name, email, password) VALUES ($1, $2, $3)",
//       [name, email, hashedPassword]
//     );

//     res.status(201).json({ message: "User registered", name });
//   } catch (error) {
//     console.error("Error registering user:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcryptjs");

// ✅ Register Route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO user_login (name, email, password) VALUES ($1, $2, $3)",
      [name, email, hashedPassword]
    );

    res.status(201).json({ message: "User registered", name });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const result = await pool.query("SELECT * FROM user_login WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Email not found" });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
