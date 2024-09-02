import React, { useState } from 'react';
import './RegistrationForm.css';

const LoginForm = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    onLogin();
    // Handle login logic here
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={loginData.username} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={loginData.password} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
