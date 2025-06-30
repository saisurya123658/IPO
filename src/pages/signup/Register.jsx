import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">💹 BLUESTOCK</h1>
          <p className="text-gray-600">Create an account</p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border px-4 py-2 rounded-md"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded-md"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-md"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <p className="text-xs text-gray-500">
            By continuing, you agree to our <a href="/terms" className="text-blue-600">terms of service</a>.
          </p>
          <div className="flex justify-center">
            <div className="g-recaptcha" data-sitekey="your-site-key"></div>
          </div>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md">
            Sign up
          </button>
          <div className="text-center text-sm text-gray-500">or sign up with</div>
          <button className="w-full border py-2 rounded-md flex items-center justify-center gap-2">
            <FaGoogle /> Continue with Google
          </button>
          <p className="text-sm text-center">
            Already have an account? <a href="/signupnow" className="text-blue-600">Sign in here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
