import React, { useState } from 'react';
import './register.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
 
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !name || !surname || !password || !phoneNumber ) {
      setError('All fields are required');
      return;
    }
    
    setError('Registration successful');
  };

  return (
    <div className="all-register">
      <div className="container-register">
        <h2 className="bold" >Register</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <label style={{color:'orange'}} className="label-register" htmlFor="name">First Name</label>
          <input className="input-register" type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <label style={{color:'orange'}} className="label-register" htmlFor="surname">Surname</label>
          <input className="input-register" type="text" id="surname" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
          <label style={{color:'orange'}} className="label-register" htmlFor="email">E-Mail</label>
          <input className="input-register" type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label style={{color:'orange'}} className="label-register" htmlFor="password">Password</label>
          <input className="input-register" type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label style={{color:'orange'}} className="label-register" htmlFor="phoneNumber">Phone Number</label>
          <input className="input-register" type="text" id="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          
          <button className="button-register" type="submit">Register</button>
          {error && <p>{error}</p>}
        </form>
        <div className="login-link">
          <p>You have already account? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
