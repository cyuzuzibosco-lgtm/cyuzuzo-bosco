import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../utils/database";

function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (database.findUser(formData.username)) {
      setError('Username already exists');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      database.addUser({ username: formData.username, password: formData.password });
      alert('Account created successfully! Please login.');
      navigate("/");
    }, 800);
  };

  const handleClear = () => {
    setFormData({ username: '', password: '', confirmPassword: '' });
    setError('');
  };

  return (
    <div className="fullscreen-container">
      {loading && <div className="loading-overlay"><div className="spinner"></div></div>}
      <div className="form-container create-container">
        <Link to="/" className="back-btn">← Back to Login</Link>
        <h2 className="form-title">Create Account</h2>
        <form className="form" onSubmit={handleCreate}>
          {error && <p style={{color: 'red'}}>{error}</p>}
          <div style={{display: 'flex', alignItems: 'center', gap: '10px', width: '100%'}}>
            <label style={{minWidth: '150px'}}>Username:</label>
            <div style={{flex: 1}}>
              <input type="text" className="input-field" style={{width: '100%'}} value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} required />
            </div>
          </div>

          <div style={{display: 'flex', alignItems: 'center', gap: '10px', width: '100%'}}>
            <label style={{minWidth: '150px'}}>Password:</label>
            <div style={{flex: 1}}>
              <input type={showPassword ? "text" : "password"} className="input-field" style={{width: '100%'}} value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', marginTop: '5px'}}>
                {showPassword ? '👁️' : '👁️🗨️'}
              </button>
            </div>
          </div>

          <div style={{display: 'flex', alignItems: 'center', gap: '10px', width: '100%'}}>
            <label style={{minWidth: '150px'}}>Confirm Password:</label>
            <div style={{flex: 1}}>
              <input type={showConfirmPassword ? "text" : "password"} className="input-field" style={{width: '100%'}} value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} required />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', marginTop: '5px'}}>
                {showConfirmPassword ? '👁️' : '👁️🗨️'}
              </button>
            </div>
          </div>

          <div style={{display: 'flex', gap: '10px'}}>
            <button type="submit" className="btn">Submit</button>
            <button type="button" onClick={handleClear} className="btn" style={{background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'}}>Clear</button>
          </div>
        </form>
        <p className="form-footer">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
