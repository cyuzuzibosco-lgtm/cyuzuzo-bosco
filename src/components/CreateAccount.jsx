import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="fullscreen-container">
      <div className="form-container create-container">
        <Link to="/" className="back-btn">← Back to Login</Link>
        <h2 className="form-title">Create Account</h2>
        <form className="form" onSubmit={handleCreate}>
          <label>Username:</label>
          <input type="text" className="input-field" required />

          <label>Password:</label>
          <input type="password" className="input-field" required />

          <label>Confirm Password:</label>
          <input type="password" className="input-field" required />

          <button type="submit" className="btn">Create Account</button>
        </form>
        <p className="form-footer">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
