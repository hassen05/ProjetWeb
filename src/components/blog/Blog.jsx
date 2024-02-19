import React from "react";
import Back from "../common/back/Back";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <Back title="Login" />
      <section className="blog padding">
        <div className="container grid2">
          {/* Your blog content */}

          {/* Login form */}
          <div id="login-page" className="login-container">
            <div className="login">
              <h2 className="login-title">Login</h2>
              <p className="notice">Please login to access the system</p>
              <form className="form-login">
                <label htmlFor="email">E-mail</label>
                <div className="input-email">
                  <i className="fas fa-envelope icon"></i>
                  <input type="email" name="email" placeholder="Enter your e-mail" required />
                </div>
                <label htmlFor="password">Password</label>
                <div className="input-password">
                  <i className="fas fa-lock icon"></i>
                  <input type="password" name="password" placeholder="Enter your password" required />
                </div>
                <div className="checkbox">
                  <label htmlFor="remember">
                    <input type="checkbox" name="remember" />
                    Remember me
                  </label>
                </div>
                <button type="submit" style={{ backgroundColor: "#007bff" }}>
                  <i className="fas fa-door-open"></i> Sign in
                </button>
              </form>
              <a href="#">Forgot your password?</a>
            </div>
            <div className="background">
              <div className="im"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
