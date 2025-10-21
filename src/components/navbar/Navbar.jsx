import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
function Navbar(props) {
  const [menu, setMenu] = useState("shop");
  const { login, handlelogin } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" /> <p>SethOsjaWEB</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          {" "}
          <Link to="/"> Shop {menu === "shop" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => setMenu("mens")}>
          {" "}
          <Link to="/mens"> Men {menu === "mens" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => setMenu("womens")}>
          {" "}
          <Link to="/womens"> Women {menu === "womens" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          {" "}
          <Link to="/kids">Kids {menu === "kids" ? <hr /> : <></>}</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
               // call the function
            }}
          >
            Login
          </button>
        </Link>{" "}
        <Link to="/cart">
          <img src={cart_icon} alt="cart-icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
      {/* {props.children} */}
    </div>
  );
}

export default Navbar;
