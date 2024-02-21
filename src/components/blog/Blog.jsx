import React, { useState } from "react";
import Back from "../common/back/Back";
import "./blog.css";

const Blog = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatchError(e.target.value !== password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
  
    // Check if the meta tag exists before accessing its content
    const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
    if (!csrfTokenMeta) {
      console.error("CSRF token meta tag not found!");
      return;
    }
  
    const csrfToken = csrfTokenMeta.content;
  
    const response = await fetch('http://127.0.0.1:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
  
    if (response.ok) {
      // Registration successful, handle any success actions here
      console.log("Registration successful!");
      // You can add code here to redirect the user to another page or perform other actions
  
      // Insert user data into the database
      try {
        const userData = { username, email }; // Only include necessary data
        const insertResponse = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
        if (insertResponse.ok) {
          console.log("User data inserted into the database successfully!");
        } else {
          console.error("Failed to insert user data into the database!");
        }
      } catch (error) {
        console.error("Error inserting user data into the database:", error);
      }
    } else {
      // Registration failed, handle any error actions here
      console.error("Registration failed!");
    }
  };
  
  

  return (
    <>
      <Back title="Login" />
      
      <section className="blog padding">
        <div className="container grid2">
          {/* Subscribe form */}
          <div className="form-container subscribe-container">
            <div className="subscribe">
              <h2 className="subscribe-title">Register</h2>
              <p className="notice">Not a member yet? You can register here!!</p>
              <form className="form-subscribe" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <div className="input-username">
                  <i className="fas fa-user icon"></i>
                  <input type="text" name="username" placeholder="Enter your username" value={username} onChange={handleUsernameChange} required />
                </div>
                <label htmlFor="email">E-mail</label>
                <div className="input-email">
                  <i className="fas fa-envelope icon"></i>
                  <input type="email" name="email" placeholder="Enter your e-mail" value={email} onChange={handleEmailChange} required />
                </div>
                <label htmlFor="password">Password</label>
                <div className="input-password">
                  <i className="fas fa-lock icon"></i>
                  <input type="password" name="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} required />
                </div>
                <label htmlFor="password-confirmation">Confirm Password</label>
                <div className="input-password">
                  <i className="fas fa-lock icon"></i>
                  <input type="password" name="password-confirmation" placeholder="Confirm your password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                </div>
                {passwordMatchError && <p style={{ color: "red" }}>Passwords do not match!</p>}
                <button type="submit" style={{ backgroundColor: "#28a745" }}>
                  <i className="fas fa-user-plus"></i> Register
                </button>
              </form>
            </div>
          </div>
          {/* Divider */}
          <div className="divider"></div>
          {/* Login form */}
          <div className="form-container login-container">
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
          </div>
        </div>
        {/* Divider */}
        <div className="horizontal-divider"></div>
      </section>
    </>
  );
};

export default Blog;
