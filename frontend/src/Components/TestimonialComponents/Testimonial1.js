import React, { useState } from "react";
import Testimonial2 from "./Testimonial2";

function Testimonial1() {
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Default verification codes
  const validCodes = ["eUkrEmJYtCewR2C", "ypxoGA0Fp2gYNQp", "6BBkwkfCKlUrHJq", "mE8r6NiK7zQWgbp", "7kEoY3sL3n8wjT4"];

  // Handle input change
  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validCodes.includes(verificationCode)) {
      setIsLoggedIn(true); // Login successful
    } else {
      alert("Invalid verification code. Please try again.");
    }
  };

  return (
    <div className="testimonial-login-container">
      {!isLoggedIn ? (
        <div className="testimonial-login-box">
          <h2 className="testimonial-login-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="testimonial-form-group">
              <label htmlFor="verificationCode" className="form-label">
                Verification Code
              </label>
              <input
                type="text"
                id="verificationCode"
                name="verificationCode"
                value={verificationCode}
                onChange={handleChange}
                placeholder="Enter the code"
                className="testimonial-form-input"
                required
              />
            </div>
            <button type="submit" className="testimonial-login-btn">
              Login
            </button>
          </form>
        </div>
      ) : (
        <Testimonial2 />
      )}
    </div>
  );
}

export default Testimonial1;
