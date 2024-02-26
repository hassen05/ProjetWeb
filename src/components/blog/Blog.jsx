import React, { useState, useEffect } from "react";
import Back from "../common/back/Back";
import "./blog.css";

const Blog = () => {
  // State variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState(null);

  // Fetch CSRF token when component mounts
  useEffect(() => {
    async function fetchCsrfToken() {
      try {
        const response = await fetch('http://127.0.0.1:8080/sanctum/csrf-cookie');
        if (response.ok) {
          // Get CSRF token from cookie
          const csrfCookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('XSRF-TOKEN='))
            .split('=')[1];
          setCsrfToken(csrfCookie);
        } else {
          throw new Error('Failed to fetch CSRF token');
        }
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    }

    fetchCsrfToken();
  }, []);

  // Form input change handlers
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

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
  
    // Set loading state
    setLoading(true);
  
    try {
      const response = await fetch('http://127.0.0.1:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken, // Include the CSRF token
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
  
      if (response.ok) {
        // Registration successful
        setRegistrationSuccess(true);
        // Clear form fields
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        // Registration failed
        console.error('Registration failed:', response.statusText);
        // Handle error (e.g., display error message)
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle error (e.g., display error message)
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };
  

  return (
    <>
      <Back title="Login" />
      
      <section className="blog padding">
        <div className="container grid2">
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
                {registrationSuccess && <p style={{ color: "green" }}>Registration successful!</p>}
                <button type="submit" style={{ backgroundColor: "#28a745" }}>
                  <i className="fas fa-user-plus"></i> Register
                </button>
              </form>
            </div>
          </div>
          <div className="divider"></div>
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
        <div className="horizontal-divider"></div>
      </section>
    </>
  );
};

export default Blog;
