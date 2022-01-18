import './register.css';

function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerTop">
          <img
            src="assets/logo/full wide.png"
            alt=""
            className="registerImg"
          />
        </div>
        <div className="registerBody">
          <input
            placeholder="Username"
            className="registerInput"
          />
          <input
            type="email"
            placeholder="Email"
            className="registerInput"
          />
          <input
            type="password"
            placeholder="Password"
            className="registerInput"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="registerInput"
          />
          <button className="registerButton">
            Sign up
          </button>
          <span className="registerForgot">or</span>
          <button className="registerButton">
            Log into your Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
