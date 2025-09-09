import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      onLogin();
    } else {
      setError("Invalid credentials. Try admin/admin123");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-cyan-400">
      <div className="bg-white rounded-xl shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Admin Login
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-2">Username</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Use <strong>admin</strong> / <strong>admin123</strong> to login
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
