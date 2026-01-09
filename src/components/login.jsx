import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // ✅ No API call
    // ✅ Directly go to next page
    navigate("/health");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="title">Smart Medi</h2>
        <p className="subtitle">User Login</p>

        <input
          type="email"
          placeholder="Email address"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {error}
          </p>
        )}

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
