import React, { useState } from 'react';
import './resetpassword.css'; 
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    
    if (email === '' || code === '' || newPassword === '') {
      setErrorMessage('All fields must be filled');
    } else {
      setSuccessMessage('Password has been reset');
    }
  };

  return (
    <div className="reset-password-container"> 
      <form className="reset-password-form" onSubmit={handleSubmit}> 
      <h1 className="bold" style={{ textAlign: 'center' }}>Reset Password</h1>

        <div className="reset-password-input-container"> {/* CSS sınıfını burada kullan */}
          <label style={{color:'orange'}}>Email:</label>
          <input 
            className="reset-password-input"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="reset-password-input-container"> {/* CSS sınıfını burada kullan */}
          <label style={{color:'orange'}}>Code:</label>
          <input 
            className="reset-password-input"
            type="text" 
            value={code} 
            onChange={(e) => setCode(e.target.value)} 
            required 
          />
        </div>
        <div className="reset-password-input-container"> {/* CSS sınıfını burada kullan */}
          <label style={{color:'orange'}}>New Password:</label>
          <input 
            className="reset-password-input"
            type="password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            required 
          />
        </div>
        <button className="reset-password-button" type="submit">Reset Password</button> 
        {errorMessage && <p className="reset-password-error">{errorMessage}</p>} 
        {successMessage && <p>{successMessage}</p>}
        <Link to="/login" className="loginform-page" style={{ color: '#B67812' }}>
  Back to Login
</Link>
      </form>
    </div>
  );
};

export default ResetPassword;
