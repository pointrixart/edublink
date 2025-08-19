import React, { useState } from "react";
import "./MyAccount.css";

export default function MyAccount() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${loginEmail}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registering with: ${registerEmail}`);
  };

  return (
    <div className="myaccount-container">
      <h1 className="page-title">My Account</h1>
      <div className="account-grid">
        
        {/* Login Section */}
        <div className="account-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>Email address *</label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />

            <label>Password *</label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />

            <div className="form-extra">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/" className="forgot-password">
                Lost your password?
              </a>
            </div>

            <button type="submit" className="btn-primary">Log in</button>
          </form>
        </div>

        {/* Register Section */}
        <div className="account-box">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <label>Email address *</label>
            <input
              type="email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              required
            />

            <label>Password *</label>
            <input
              type="password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
            />

            <p className="register-info">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>

            <button type="submit" className="btn-primary">Register</button>
          </form>
        </div>

      </div>
    </div>
  );
}
