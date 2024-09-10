// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    alert(`Logging in with User ID: ${userId}`);
  };

  const handleCancel = () => {
    setUserId('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="header">Event Management System</div>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <button type="button" className="label">User Id</button>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="input-field"
            placeholder="Admin"
          />
        </div>
        <div className="form-group">
          <button type="button" className="label">Password</button>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            placeholder="Admin"
          />
        </div>
        <div className="button-container">
          <button type="button" className="button cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="button login-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
