import './login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Email or password cannot be empty');
    } else {
      console.log('Login form submitted (for display)');
      setError('');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-input-container">
          <h1 className="bold" style={{ textAlign: 'center' }}>Login</h1>
          <label className="label-register" htmlFor="name" style={{ color: 'orange' }}>E-Mail</label>
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input-container">
          <label className="label-register" htmlFor="name" style={{ color: 'orange' }}>Password</label>
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/Home">
          <button type="submit" className="login-button">
            Login
          </button>
        </Link>
        {error && <p className="error-message">{error}</p>}
        <Link to="/forgot-password" className="forgot-password link" style={{ color: '#B67812' }}>
          Forgot Password
        </Link>
        <Link to="/register" className="register link" style={{ color: '#B67812' }}>
          Don't you have an account yet?
        </Link>



      </form>
    </div>
  );
};

export default LoginForm;
