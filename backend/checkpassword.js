// checkPassword.js
const bcrypt = require("bcryptjs");

const plainPassword = "2222"; // 👈 change this to the password you want to test
const hashedPassword = "$2b$10$NFGJ4grwpJmt64ltDp4Rnu3qTV.d.9g0G1AOsIiLceDXGl26x9VTa";

bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
  if (err) throw err;
  console.log("Password match:", result); // true or false
});
