import './Form.css';
import React from 'react';

const Login = () => {
  return (
    <div className="log-form">
  <div className="formss">Login to your account</div>
  <form>
    <input type="text" title="username" placeholder="username" />
    <input type="password" title="username" placeholder="password" />
    <button type="submit" class="btn">Login</button>
    <a class="forgot" href="#">Forgot Username?</a>
  </form>
</div>
  );  
}

export default Login;
