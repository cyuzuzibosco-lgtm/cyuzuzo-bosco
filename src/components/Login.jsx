import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../utils/database";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (database.validateLogin(formData.username, formData.password)) {
        navigate("/dashboard");
      } else {
        setError('Invalid username or password');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="fullscreen-container">
      {loading && <div className="loading-overlay"><div className="spinner"></div></div>}
      <div className="form-container login-container">
        <h2 className="form-title" style={{fontSize: '24px', marginBottom: '20px'}}>Login</h2>
        <form className="form" onSubmit={handleLogin}>
          {error && <p style={{color: 'red', fontSize: '12px'}}>{error}</p>}
          <input type="text" className="input-field" placeholder="Username" style={{width: '100%', padding: '12px', fontSize: '14px'}} value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} required />
          <div style={{width: '100%'}}>
            <input type={showPassword ? "text" : "password"} className="input-field" placeholder="Password" style={{width: '100%', padding: '12px', fontSize: '14px'}} value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', marginTop: '5px'}}>
              {showPassword ? '👁️' : '👁️🗨️'}
            </button>
          </div>
          <button type="submit" className="btn" style={{padding: '12px 24px', fontSize: '14px'}}>Login</button>
        </form>
        <p className="form-footer" style={{fontSize: '12px', marginTop: '15px'}}>
          <Link to="/create-account">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
