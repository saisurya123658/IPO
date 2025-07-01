
// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");

// const adminRoutes = require("./routes/adminauth");
// const userRoutes = require("./routes/userauth")



// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/admin", adminRoutes);    // ✅ Correct path for admin login
// app.use("/api/user", require("./routes/userauth"));    // ✅ Correct path for user registration

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const adminRoutes = require("./routes/adminauth")
const userRoutes = require("./routes/userauth"); // 👈 make sure it's imported

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRoutes); 
app.use("/api/user", userRoutes); // 👈 correct path for user routes

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

