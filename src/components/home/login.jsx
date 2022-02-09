import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="block-login">
        <div className="login-container">
          <div class="aside-pic">
            <img src="images/img-01.webp" alt="IMG" />
          </div>
          <form className="login-form" action="#" method="post">
            <h3 className="legend">Member Login</h3>
            <div className="wrap-input">
              <input
                class="form-input"
                type="text"
                name="email"
                placeholder="Email"
              />
              <span class="symbol-input">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>
            <div className="wrap-input">
              <input
                className="form-input"
                type="password"
                placeholder="Password"
                name="password"
                required=""
              />
              <span class="symbol-input">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            <div className="btn-container">
              <button type="submit" class="btn btn--accent btn-submit">
                Login
              </button>
            </div>
            <div class="login-text">
              <a href="#">Forgot Username / Password?</a>
            </div>
            <div class="login-text create-account">
              <a href="#">
                Create your Account
                <i class="fas fa-long-arrow-alt-right arrow"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
