import './login.css';

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginTop">
          <img
            src="assets/logo/full wide.png"
            alt=""
            className="loginImg"
          />
        </div>
        <div className="loginBody">
          <input
            type="email"
            placeholder="Email"
            className="loginInput"
          />
          <input
            type="password"
            placeholder="Password"
            className="loginInput"
          />
          <button className="loginButton">Log In</button>
          <span className="loginForgot">
            Forgot Password?
          </span>
          <button className="loginButton">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
