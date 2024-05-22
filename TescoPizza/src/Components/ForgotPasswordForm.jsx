import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './forgotpassword.css';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

   
    if (email === '') {
      setErrorMessage('Email cannot be empty');
    } else {
      setSuccessMessage('Reset code has been sent to your email');
    }
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleForgotPassword}>
        <div className="forgot-password-input-container">
          <input 
            type="email" 
            className="forgot-password-input" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="forgot-password-button">Send Reset Code</button>
        {errorMessage && <p className="forgot-password-error">{errorMessage}</p>}
        {successMessage && <p className="forgot-password-success">{successMessage}</p>}
        <Link to={`/reset-password/`} className="back-to-login">Reset Password</Link>
        <Link to="/login" className="back-to-login">Back to Login</Link>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
