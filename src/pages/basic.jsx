
// import axios from "axios";
// import { useState } from "react";

// export default function BluestockAuth() {
//   const [email, setEmail] = useState("admin@blustock.com");
//   const [password, setPassword] = useState("admin123");

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", {
//         email,
//         password,
//       });
//       alert("✅ Login successful!");
//       console.log("JWT Token:", res.data.token);
//       // optionally store token:
//       // localStorage.setItem("admin_token", res.data.token);
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }
// src/pages/basic.jsx
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BluestockAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });

      alert("✅ Login successful!");
      console.log("JWT Token:", res.data.token);

      // Optional: Store token in localStorage
      localStorage.setItem("admin_token", res.data.token);

      // ✅ Navigate to dashboard
      navigate("/admin");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      <input
        type="email"
        className="px-4 py-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        className="px-4 py-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
