import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">💹 BLUESTOCK</h1>
          <p className="text-gray-600">Forgot Password?</p>
          <p className="text-sm text-gray-500">Enter your email address to get the password reset link.</p>
        </div>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md">
            Password Reset
          </button>
          <p className="text-sm text-center">
            <a href="/signupnow" className="text-blue-600">Back to login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
