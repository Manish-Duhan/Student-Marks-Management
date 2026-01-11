import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!userId || !password || !role) {
      setError("All fields are required");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    setError("");

    if (role === "student") navigate("/student");
    if (role === "teacher") navigate("/teacher");
    if (role === "hod") navigate("/hod");
    if (role === "principal") navigate("/principal");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white w-[350px] p-6 rounded-lg shadow-lg">

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Student Marks Management
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="User ID"
          className="w-full border rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="teacher">Class Teacher</option>
          <option value="hod">HOD</option>
          <option value="principal">Principal</option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <p
          className="text-sm text-center text-indigo-600 mt-4 cursor-pointer hover:underline"
          onClick={() => alert("Forgot password will be added later")}
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default Login;
