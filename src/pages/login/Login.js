import './login.css';
import { useContext, useRef } from 'react';
import { loginCall } from '../../backendCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();

    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginTop">
          <img
            src={PF + 'logo/fullwide.png'}
            alt=""
            className="loginImg"
          />
        </div>
        <form className="loginBody" onSubmit={handleClick}>
          <input
            type="email"
            required
            placeholder="Email"
            className="loginInput"
            ref={email}
          />
          <input
            type="password"
            required
            minLength={6}
            placeholder="Password"
            className="loginInput"
            ref={password}
          />
          <button
            className="loginButton"
            type="submit"
            disabled={isFetching}>
            {isFetching ? (
              <CircularProgress
                color="inherit"
                size="20px"
              />
            ) : (
              'Log In'
            )}
          </button>
          <span className="loginForgot">
            Forgot Password?
          </span>
          <Link to="/register">
            <button
              className="loginButton"
              type="submit"
              disabled={isFetching}>
              {isFetching ? (
                <CircularProgress
                  color="inherit"
                  size="20px"
                />
              ) : (
                'Create New Account'
              )}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
