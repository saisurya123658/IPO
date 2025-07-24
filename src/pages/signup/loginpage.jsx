// // import { useState } from "react";
// // import RegisterPage from "./Register";
// // import ForgotPassword from "./forgotpassword";
// // import { FaGoogle } from "react-icons/fa";

// // export default function LoginPage() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-white px-4">
// //       <div className="max-w-md w-full space-y-6">
// //         <div className="text-center">
// //           <h1 className="text-2xl font-bold text-gray-900 mb-2">💹 BLUESTOCK</h1>
// //         </div>
// //         <div className="space-y-4">
// //           <input
// //             type="email"
// //             placeholder="Email Address"
// //             className="w-full border px-4 py-2 rounded-md"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           <div className="relative">
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               className="w-full border px-4 py-2 rounded-md"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //             <a href="/ForgotPassword" className="absolute top-2 right-3 text-xs text-blue-600">Forgot Password?</a>
// //           </div>
// //           <div className="flex items-center space-x-2">
// //             <input type="checkbox" className="accent-purple-600" defaultChecked />
// //             <label className="text-sm">Keep me signed in</label>
// //           </div>
// //           <div className="flex justify-center">
// //             <div className="g-recaptcha" data-sitekey="your-site-key"></div>
// //           </div>
// //           <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md">
// //             Login
// //           </button>
// //           <div className="text-center text-sm text-gray-500">or sign in with</div>
// //           <button className="w-full border py-2 rounded-md flex items-center justify-center gap-2">
// //             <FaGoogle /> Continue with Google
// //           </button>
// //           <p className="text-sm text-center">
// //             <a href="/Register" className="text-blue-600">Create an account</a>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";

backend_url = "https://ipo-wusa.onrender.com";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(backend_url + "/api/user/login", {
        email,
        password,
      });

      alert(res.data.message);
      
      // optionally store user info (optional):
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      navigate("/"); // ✅ redirect to homepage on success
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">💹 BLUESTOCK</h1>
        </div>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-2 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="/ForgotPassword" className="absolute top-2 right-3 text-xs text-blue-600">
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="accent-purple-600" defaultChecked />
            <label className="text-sm">Keep me signed in</label>
          </div>
          {/* CAPTCHA placeholder — not active unless integrated */}
          <div className="flex justify-center">
            <div className="g-recaptcha" data-sitekey="your-site-key"></div>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md"
          >
            Login
          </button>
          <div className="text-center text-sm text-gray-500">or sign in with</div>
          <button className="w-full border py-2 rounded-md flex items-center justify-center gap-2">
            <FaGoogle /> Continue with Google
          </button>
          <p className="text-sm text-center">
            <a href="/Register" className="text-blue-600">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

