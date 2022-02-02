import './register.css';
import { useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      confirmPassword.current.value !==
      password.current.value
    ) {
      confirmPassword.current.setCustomValidity(
        'Passwords do not match!'
      );
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerTop">
          <img
            src="assets/logo/fullwide.png"
            alt=""
            className="registerImg"
          />
        </div>
        <form
          className="registerBody"
          onSubmit={handleClick}>
          <input
            placeholder="Username"
            required
            ref={username}
            className="registerInput"
          />
          <input
            type="email"
            required
            placeholder="Email"
            ref={email}
            className="registerInput"
          />
          <input
            type="password"
            minLength={6}
            required
            placeholder="Password"
            ref={password}
            className="registerInput"
          />
          <input
            type="password"
            required
            placeholder="Confirm Password"
            ref={confirmPassword}
            className="registerInput"
          />
          <button className="registerButton">
            Sign up
          </button>
          <span className="registerForgot">or</span>
          <Link to="/login">
            <button
              className="registerButton"
              type="submit">
              Log into your Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
