import React, { useState } from 'react';
import './style.css';

function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <div className="circle-top circle-2"></div>
      <div className="circle-top circle-3"></div>

      <div className="login-container">
        <div className="logo">
          <img src="/user.png" className="logo-img" alt="Logo" />
        </div>

        <form>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="btn-signin">Sign in</button>

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
