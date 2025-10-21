import React from "react";
import "./NewLetters.css";
import logo from "../components/assets/logo.png";

function NewLetters() {
  return (
    <div className="newletters-container">
      <div className="newletters-content">
        <h1>Get exclusive offers on your email</h1>
        <h4>Subscribe to our newsletters and stay updated</h4>

        <div className="input-email">
          <div className="email">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default NewLetters;
