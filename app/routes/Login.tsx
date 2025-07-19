import React from 'react';
import '../styles/routes/login.css';
import { Link } from 'react-router';

function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: '',
    password: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="container login__container login">
      <h1 className="login__heading">Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button className="btn btn--primary login__btn">Log in</button>
      </form>

      <p className="login__text">
        Don't have an account?{' '}
        <Link to="" className="btn btn--secondary">
          Create one now
        </Link>
      </p>
    </div>
  );
}

export default Login;
