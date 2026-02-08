import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="fullscreen-container">
      <div className="form-container login-container">
        <h2 className="form-title">Login</h2>
        <form className="form" onSubmit={handleLogin}>
          <label>Username:</label>
          <input type="text" className="input-field" required />

          <label>Password:</label>
          <input type="password" className="input-field" required />

          <button type="submit" className="btn">Login</button>
        </form>
        <p className="form-footer">
          Don't have an account? <Link to="/create-account">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
