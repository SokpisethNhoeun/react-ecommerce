import React, { useContext } from "react";
import "./LoginSignUp.css";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ShopCategory from "./ShopCategory";
function LoginSignUp() {
  // const [login , setlogin]=useState(false);
  // const handleLogin =() => {
  //   setlogin(!login);
  // }
  const {login , handleLogin} = useContext(ShopContext)

  return (
    <div className="loginsignup-form-container">
      {login === false?   <div className="loginsignup-form">
        <h1>Login</h1>
        <div className="input-login">
        <input type="email" name="" id="" placeholder="Email address" required />
        <input type="password" name="" id="" placeholder="Password" required />
        <button >Continue</button>
        </div>
        <p>
          Create an account? <span onClick={handleLogin}>Click here</span>{" "}
        </p>
        <div className="verify">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>:  <div className="loginsignup-form">
        <h1>Sign up</h1>
        <div className="input-login">
          <input type="text" placeholder="Enter name" />
        <input type="email" name="" id="" placeholder="Email address" required />
        <input type="password" name="" id="" placeholder="Password" required />
        <button >Sign up account</button>
        </div>
        <p>
          Already have an account? <span onClick={handleLogin}>Click here</span>{" "}
        </p>
        <div className="verify">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>}
    
    </div>
  );
}

export default LoginSignUp;
