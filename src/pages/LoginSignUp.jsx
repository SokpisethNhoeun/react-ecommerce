import React, { useContext, useState } from "react";
import "./LoginSignUp.css";
import { ShopContext } from "../context/ShopContext";

function LoginSignUp() {
  const { login, handleLogin } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!login) {
      // Sign up validation
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }
    }

    if (!agreeToTerms) {
      newErrors.terms = "You must agree to the terms";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (login) {
        console.log("Logging in with:", { email: formData.email });
        // Handle login logic here
      } else {
        console.log("Signing up with:", formData);
        // Handle signup logic here
      }
      
      // Reset form after successful submission
      if (login) {
        setFormData({ name: "", email: "", password: "" });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggle = () => {
    handleLogin();
    // Reset errors when toggling
    setErrors({});
    // Reset form data except email for better UX
    setFormData((prev) => ({
      name: "",
      email: prev.email, // Keep email when toggling
      password: "",
    }));
  };

  return (
    <div className="loginsignup-form-container">
      <div className="loginsignup-form-wrapper">
        {login === false ? (
          <form className="loginsignup-form" onSubmit={handleSubmit} noValidate>
            <div className="form-header">
              <h1>Login</h1>
              <p className="form-subtitle">Welcome back! Please enter your details.</p>
            </div>
            
            <div className="input-login">
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "error" : ""}
                  required
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              
              <div className="form-options">
                <div className="remember-me">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="/forgot-password" className="forgot-password">
                  Forgot password?
                </a>
              </div>
              
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Continue"}
              </button>
            </div>
            
            <div className="divider">
              <span>or</span>
            </div>
            
            <button type="button" className="social-login google-login">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
            
            <p className="toggle-form">
              Don't have an account?{" "}
              <span onClick={handleToggle}>Sign up</span>
            </p>
            
            <div className="verify">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className={errors.terms ? "error" : ""}
              />
              <label htmlFor="terms">
                By continuing, I agree to the{" "}
                <a href="/terms">terms of use</a> &{" "}
                <a href="/privacy">privacy policy</a>.
              </label>
              {errors.terms && <span className="error-message">{errors.terms}</span>}
            </div>
          </form>
        ) : (
          <form className="loginsignup-form" onSubmit={handleSubmit} noValidate>
            <div className="form-header">
              <h1>Sign Up</h1>
              <p className="form-subtitle">Create your account to get started.</p>
            </div>
            
            <div className="input-login">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                  required
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password (min. 6 characters)"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "error" : ""}
                  required
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating account..." : "Sign up"}
              </button>
            </div>
            
            <div className="divider">
              <span>or</span>
            </div>
            
            <button type="button" className="social-login google-login">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>
            
            <p className="toggle-form">
              Already have an account?{" "}
              <span onClick={handleToggle}>Login</span>
            </p>
            
            <div className="verify">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className={errors.terms ? "error" : ""}
              />
              <label htmlFor="terms">
                By continuing, I agree to the{" "}
                <a href="/terms">terms of use</a> &{" "}
                <a href="/privacy">privacy policy</a>.
              </label>
              {errors.terms && <span className="error-message">{errors.terms}</span>}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginSignUp;